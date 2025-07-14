const { OpenAI } = require('openai');
const Prompt = require('../models/prompt');
const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');
const { Configuration, OpenAIApi } = require("openai");

// For text generation (OpenRouter)
const openRouter = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: 'https://openrouter.ai/api/v1',
  defaultHeaders: {
    'HTTP-Referer': 'http://localhost:5000',
    'X-Title': 'NapkinAI-Clone'
  }
});



// For image generation (OpenAI)
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY 
});

exports.generateText = async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) return res.status(400).json({ msg: 'Prompt is required' });

  console.log(prompt)

  try {
    const completion = await openRouter.chat.completions.create({
      model: 'deepseek/deepseek-chat-v3-0324:free',
      messages: [
        { role: 'user', content: `Summarize this into a 2-page explanation:\n\n${prompt}` }
      ],
      max_tokens: 1000
    });

    const aiResponse = completion.choices[0].message.content;

    // Save to database
    const newPrompt = new Prompt({
      user: req.user,
      promptText: prompt,
      result: aiResponse,
      type: 'text'
    });

    await newPrompt.save();

    res.status(200).json({ result: aiResponse });
  } catch (err) {
    console.error('OpenRouter Error:', JSON.stringify(err?.response?.data || err.message, null, 2));
    res.status(500).json({ msg: 'OpenRouter error' });
  }
};




exports.generateImage = async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) return res.status(400).json({ msg: 'Prompt is required' });

  // Validate prompt length
  if (prompt.length < 3) {
    return res.status(400).json({ msg: 'Prompt must be at least 3 characters long' });
  }

  try {
    console.log("Generating image for prompt:", prompt);
    
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt.trim(),
      n: 1,
      size: "1024x1024" // DALL·E-3 only supports 1024x1024
    });
    
    console.log("OpenAI response:", response);
    const imageUrl = response.data[0].url;

    // Save to database
    const newPrompt = new Prompt({
      user: req.user,
      promptText: prompt,
      result: imageUrl,
      type: 'image'
    });

    await newPrompt.save();

    res.status(200).json({ imageUrl });
  } catch (err) {
    console.error("OpenAI Error:", err.response?.data || err.message);
    
    // Handle specific error types
    if (err.response?.data?.type === "image_generation_user_error") {
      return res.status(400).json({
        msg: 'Image generation failed: Please try a different prompt',
        error: 'The prompt may contain inappropriate content or be too vague'
      });
    }
    
    res.status(500).json({
      msg: 'Image generation failed',
      error: err.response?.data || err.message
    });
  }
};




  exports.getPromptHistory = async (req, res) => {
    try {
      const prompts = await Prompt.find({ user: req.user }).sort({ createdAt: -1 });
      res.status(200).json(prompts);
    } catch (err) {
      console.error(err);
      res.status(500).json({ msg: 'Failed to fetch history' });
    }
  };

exports.getPromptById = async (req, res) => {
  try {
    const prompt = await Prompt.findOne({ 
      _id: req.params.id, 
      user: req.user 
    });
    
    if (!prompt) {
      return res.status(404).json({ msg: 'Prompt not found' });
    }
    
    res.status(200).json(prompt);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Failed to fetch prompt' });
  }
};

// Add this temporary test function
exports.testOpenAI = async (req, res) => {
  try {
    const response = await openai.models.list();
    res.json({ success: true, models: response.data });
  } catch (err) {
    res.json({ success: false, error: err.message });
  }
};

console.log("API Key loaded:", process.env.OPENAI_API_KEY ? "Yes" : "No");
console.log("API Key starts with sk-:", process.env.OPENAI_API_KEY?.startsWith('sk-'));