import React from 'react';
import { useParams } from 'react-router-dom';

const blogDetails = {
  'custom-generation': {
    title: 'Introducing Custom Generation – Get the Visual You Want, Faster',
    content: (
      <>
        <p>
          Today we’re launching Custom Generation to give you more control over visuals – so you can get the visual you want, faster.
          Now during generation, you can specify what visual you need, choose your preferred layout, and fine-tune the details so the result matches your vision.
        </p>

        <div className="text-center my-4">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/FWwi6qTrd2U?si=fXxGxDu_BhcNU_Tw" 
            title="Introducing Custom Generation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '12px', maxWidth: '100%' }}
          ></iframe>
        </div>

        <h4 className="mt-5 mb-3 fw-bold">Here’s how this improves Napkin experience:</h4>
        <ul style={{ lineHeight: '1.8', paddingLeft: '1.4rem' }}>
          <li><strong>Specify Your Visual Type:</strong> Need a flowchart, mind map, or something else? Just type what you need and Napkin will generate the closest matching visual.</li>
          <li><strong>Choose Visual Orientation:</strong> Select from vertical, horizontal, square, or let Napkin Auto decide.</li>
          <li><strong>Control Visual Depth and Text:</strong> Choose breakdowns vs. summaries. You can preserve your original words too.</li>
        </ul>

        <p className="mt-4">
          This is another step toward making visual generation effortless — so you spend less time fiddling and more time creating exactly what you want.
        </p>

        <div className="text-center my-5">
          <img
            src="https://www.napkin.ai/assets/blog/napkin-launches-custom-generation/visual-1.png"
            alt="Guide Napkin to Generate"
            style={{ width: '100%', maxWidth: '800px', borderRadius: '12px' }}
          />
        </div>

        <p className="text-muted mt-4" style={{ fontSize: '0.9rem' }}>
          Written by <strong>Pramod Sharma</strong>, Co-founder and CEO of Napkin AI
        </p>
      </>
    ),
  },





  'elastic-designs': {
    title: 'Introducing Elastic Designs - Get The Right Visuals, Faster 🚀',
    content: (
      <>
        <p>
          Napkin visuals just got better. With Elastic Designs, your visuals now scale automatically with your content and support more elements than ever – making room for all your ideas. And with Text-Visual sync, any changes you make to your text instantly reflect in your visuals – removing the need to regenerate or fix things manually.
        </p>

        <div className="text-center my-4">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/rLTMZ4JyzPc?si=qgV-ZKBrgYPutrqC" 
            title="Introducing Custom Generation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '12px', maxWidth: '100%' }}
          ></iframe>
        </div>

        <h4 className="mt-5 mb-3 fw-bold">Here’s how this improves Napkin experience:</h4>
        <ul style={{ lineHeight: '1.8', paddingLeft: '1.4rem' }}>
          <li><strong>Polished Visuals, Every Time:</strong> Whether you’re generating new visuals or editing existing ones, your visuals now scale automatically with your content – so they always look clean and polished. No more manual layout tweaks or spacing fixes – just visuals that work.</li>
          <li><strong>More Elements for Bigger Ideas: </strong>Now your visuals can support more elements than ever before to match your growing ideas. The design expands smoothly to fit everything in, so no content gets cut off or left out.</li>
          <li><strong>Text-Visual Sync:</strong> Made changes to your text after generation? Just hit the Text-Visual sync button in the frame menu, and your visual instantly reflects the updates. No need to regenerate or fix things manually. It’s faster, simpler, and keeps your workflow smooth.</li>
        </ul>

        <p className="mt-4">
          This is a big step toward making visual generation effortless – so you spend less time tweaking visuals and get to the right one faster, while ensuring every visual looks polished and well-designed.
        </p>

        <div className="text-center my-5">
          <img
            src="https://www.napkin.ai/assets/blog/napkin-launches-elastic-designs/visual-1.png"
            alt="Guide Napkin to Generate"
            style={{ width: '100%', maxWidth: '800px', borderRadius: '12px' }}
          />
        </div>

        <p className="text-muted mt-4" style={{ fontSize: '0.9rem' }}>
          Written by <strong>Pramod Sharma</strong>, Co-founder and CEO of Napkin AI
        </p>
      </>
    ),
  },





  'File Import': {
    title: 'PPT Export & File Import - Now Live on Napkin 🚀',
    content: (
      <>
        <p>
         We've got a big Napkin update we think you'll love: You can now export visuals directly to PowerPoint, Google Slides, Canva, Keynote and more, and bring your own content files straight into Napkin—no more manual copy-pasting.
         </p>

        <div className="text-center my-4">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/RJB4gOY9n74?si=EVRl_QapemZvQKT7"
            title="Introducing Custom Generation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '12px', maxWidth: '100%' }}
          ></iframe>
        </div>

        <h4 className="mt-5 mb-3 fw-bold">Here’s how this improves Napkin experience:</h4>
        <ul style={{ lineHeight: '1.8', paddingLeft: '1.4rem' }}>
          <li><strong>No More Copy-Pasting:</strong>Just upload your DOC, PDF, PPT, Markdown, or HTML files, and Napkin will extract all the content for you in seconds—so you can skip the copy-pasting and jump straight into creating visuals.</li>
          <li><strong>Edit Easily in PPT: </strong>Download your visuals as PPT files and open them in any presentation tool to change fonts, tweak colors, resize elements, add animations, and more—all within the tools you’re already comfortable using.</li>
          <li><strong>Smoother Workflow:</strong> Make quick final text edits directly in your presentation app, reducing the need to switch apps back and forth, streamlining your work, and saving you time.</li>
        </ul>

        <p className="mt-4">
          This update brings Napkin closer to your workflow—so you can create impactful presentations faster, with less friction and more creative control.
        </p>

        <div className="text-center my-5">
          <img
            src="https://www.napkin.ai/assets/blog/napkin-launches-ppt-export-files-import/visual-1.png"
            alt="Guide Napkin to Generate"
            style={{ width: '100%', maxWidth: '800px', borderRadius: '12px' }}
          />
        </div>

        <p className="text-muted mt-4" style={{ fontSize: '0.9rem' }}>
          Written by <strong>Pramod Sharma</strong>, Co-founder and CEO of Napkin AI
        </p>
      </>
    ),
  },




  'Custom styles': {
    title: 'Introducing Custom Styles: Generate Visuals That Match Your Brand 🚀',
    content: (
      <>
        <p>
         We’re excited to introduce Custom Styles—one of our most requested features! Now, you can instantly generate visuals that match your brand or personal style without the hassle of manual edits. Simply select your preferred colors and fonts, and Napkin will generate multiple custom styles for you. Pick your favorite style and apply it to new or existing visuals —saving you time while ensuring visual consistency.
         </p>

        <div className="text-center my-4">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/BnbCL_1D2uI?si=jk9tXu6xgh0u5sz5"
            title="Introducing Custom Generation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '12px', maxWidth: '100%' }}
          ></iframe>
        </div>

        <h4 className="mt-5 mb-3 fw-bold">Here’s How Custom Styles Improves Your Napkin Experience:</h4>
        <ul style={{ lineHeight: '1.8', paddingLeft: '1.4rem' }}>
          <li><strong>No More Manual Edits:</strong>Say goodbye to tweaking visuals one by one. Create a custom style once and apply it instantly to all your visuals—whether new or already generated—so they always match your brand or personal style effortlessly.</li>
          <li><strong>Custom Fonts to Match Your Style:  </strong>Now you can choose from 700+ new Google Fonts or upload your own to ensure every generated visual aligns perfectly with your brand identity.</li>
          <li><strong>Multiple Styles for Maximum Flexibility: </strong>Need different branding for different clients or projects? Create as many custom styles as you need and apply them instantly—so your visuals always match the right look with zero extra effort.</li>
          <li><strong>Instant Style Creation with Auto Color Extraction:</strong>  Upload an image with your brand colors—like a logo or brand guide—and Napkin will automatically extract the brand colors, helping you set up a custom style in seconds.</li>
       
        </ul>

        <p className="mt-4">
          This update is another big step toward our goal of helping you create truly unique visuals that perfectly reflect your brand or personal style.
        </p>

        <div className="text-center my-5">
          <img
            src="https://www.napkin.ai/assets/blog/napkin-launches-custom-styles/visual-1.png"
            alt="Guide Napkin to Generate"
            style={{ width: '100%', maxWidth: '800px', borderRadius: '12px' }}
          />
        </div>

        <p className="text-muted mt-4" style={{ fontSize: '0.9rem' }}>
          Written by <strong>Pramod Sharma</strong>, Co-founder and CEO of Napkin AI
        </p>
      </>
    ),
  },




    'Faster': {
    title: 'Faster, More Accurate Generation with 50+ New Designs in Napkin',
    content: (
      <>
        <p>
         Today, we’re excited to share a major update with you: Napkin’s visual generation is now 20% faster and 18% more accurate, making it easier to create visuals efficiently. We’ve also added 50+ new designs and improved icon matching by 45%, giving you more ways to create unique visuals that effectively convey your ideas and help you stand out
         </p>

        <div className="text-center my-4">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/Rb4PNH9kbBM?si=qT-3_UUnT_SxfoZt"
            title="Introducing Custom Generation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '12px', maxWidth: '100%' }}
          ></iframe>
        </div>

        <h4 className="mt-5 mb-3 fw-bold">Here’s What’s New:</h4>
        <ul style={{ lineHeight: '1.8', paddingLeft: '1.4rem' }}>
          <li><strong>20% Faster Visual Generation:</strong>Faster, smoother visual creation lets you share ideas quicker than ever–without compromising quality–allowing you to generate more visuals in less time.</li>
          <li><strong>18% Better Label and Description Accuracy:  </strong>Improved labeling and descriptions mean higher-quality visual generation from the start, saving you time on edits so you can focus on what matters.</li>
          <li><strong>50+ New Designs: </strong>A wide variety of new designs to help you create unique, tailored visuals that perfectly fit your needs.</li>
          <li><strong>45% Better Icon Matching: </strong> Our improved AI models ensure generated visuals have more relevant icons, while the expanded icon library and improved Spark Search experience offer greater flexibility for customization.</li>
       
        </ul>

        <p className="mt-4">
          These updates are foundational to making Napkin generation even better—helping you create truly unique visuals that capture your ideas.

Your continued support has been instrumental in shaping the Napkin platform into what it is today. Each update brings us closer to our ambitious goal of enabling you to create truly unique and relevant visuals. With more exciting updates on the way, we’re confident 2025 will be a transformative year for Napkin.
        </p>

        <div className="text-center my-5">
          <img
            src="https://www.napkin.ai/assets/blog/napkin-launches-50-new-designs-improvements/visual-1.png"
            alt="Guide Napkin to Generate"
            style={{ width: '100%', maxWidth: '800px', borderRadius: '12px' }}
          />
        </div>

        <p className="text-muted mt-4" style={{ fontSize: '0.9rem' }}>
          Written by <strong>Pramod Sharma</strong>, Co-founder and CEO of Napkin AI
        </p>
      </>
    ),
  },



      'Frame': {
    title: 'Better Visuals, Less Effort - Introducing Frame & Canvas Settings 🚀',
    content: (
      <>
        <p>
         We just released frame, style switching, aspect ratio, canvas settings, and more. The team has worked really hard to bring you these features, and we hope they make it faster and easier to create the perfect visuals you need for any platform or purpose.
         </p>

        <div className="text-center my-4">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/ppHt1XTBrYc?si=6jDpwDih-m7kqtyi"
            title="Introducing Custom Generation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '12px', maxWidth: '100%' }}
          ></iframe>
        </div>

        <h4 className="mt-5 mb-3 fw-bold">Here’s What’s New:</h4>
        <ul style={{ lineHeight: '1.8', paddingLeft: '1.4rem' }}>
          <li><strong>Switch Styles Effortlessly:</strong> Picked a visual style but changed your mind? No worries! Now you can instantly switch between visual styles without starting over. It’s quick, easy, and lets you explore different styles until you find the perfect one</li>
          <li><strong>Choose Aspect Ratio:</strong>Whether you’re creating visuals for social media, using them in slides, or something else, they need the right dimensions. With aspect ratio support, you can resize visuals instantly for any platform including presentations (16:9), LinkedIn (1:1) and Instagram (4:5).</li>
          <li><strong>One-Click Export:  </strong>Exporting visuals is now faster than ever. Hover over the frame, click the download icon, and your visual is ready. No more struggling with dragging and selecting—just one click and done.</li>
          <li><strong>Set Visual Language:  </strong>  Have content in one language but need visuals in another? Now you can generate visuals in your preferred language, whether it’s for a client project, international team, or personal use.</li>
          <li><strong>Choose Canvas Style: </strong> Love the ruled notebook look, or prefer a cleaner, blank canvas? The choice is now yours. Toggle between styles in just one click to match your aesthetic.</li>
          <li><strong>Page Breaks for Perfect Exports:</strong>Ever wondered how your Napkin will look as a PDF? With page break indicators, you can now see exactly where pages will split when downloading your Napkin. Choose layouts like A4, US Letter, or the new 16:9 aspect ratio—perfect for exporting in a presentation-ready format.</li>
       
        </ul>

        <p className="mt-4">
          These updates are all about putting you in control—letting you customize your visuals and workspace.
          </p>

        <div className="text-center my-5">
          <img
            src="https://www.napkin.ai/assets/blog/napkin-launches-frame-and-canvas-settings/visual-1.png"
            alt="Guide Napkin to Generate"
            style={{ width: '100%', maxWidth: '800px', borderRadius: '12px' }}
          />
        </div>

        <p className="text-muted mt-4" style={{ fontSize: '0.9rem' }}>
          Written by <strong>Pramod Sharma</strong>, Co-founder and CEO of Napkin AI
        </p>
      </>
    ),
  },



  'Comm': {
    title: 'Introducing Custom Styles: Generate Visuals That Match Your Brand 🚀',
    content: (
      <>
        <p>
         We’re excited to introduce Custom Styles—one of our most requested features! Now, you can instantly generate visuals that match your brand or personal style without the hassle of manual edits. Simply select your preferred colors and fonts, and Napkin will generate multiple custom styles for you. Pick your favorite style and apply it to new or existing visuals —saving you time while ensuring visual consistency.
         </p>

        <div className="text-center my-4">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/Eu7lpc4LVuo?si=IN1HGy5mLUVFiB_2"
            title="Introducing Custom Generation"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: '12px', maxWidth: '100%' }}
          ></iframe>
        </div>

        <h4 className="mt-5 mb-3 fw-bold">Here’s How Custom Styles Improves Your Napkin Experience:</h4>
        <ul style={{ lineHeight: '1.8', paddingLeft: '1.4rem' }}>
          <li><strong>No More Manual Edits:</strong>Say goodbye to tweaking visuals one by one. Create a custom style once and apply it instantly to all your visuals—whether new or already generated—so they always match your brand or personal style effortlessly.</li>
          <li><strong>Custom Fonts to Match Your Style:  </strong>Now you can choose from 700+ new Google Fonts or upload your own to ensure every generated visual aligns perfectly with your brand identity.</li>
          <li><strong>Multiple Styles for Maximum Flexibility: </strong>Need different branding for different clients or projects? Create as many custom styles as you need and apply them instantly—so your visuals always match the right look with zero extra effort.</li>
          <li><strong>Instant Style Creation with Auto Color Extraction:</strong>  Upload an image with your brand colors—like a logo or brand guide—and Napkin will automatically extract the brand colors, helping you set up a custom style in seconds.</li>
       
        </ul>

        <p className="mt-4">
          This update is another big step toward our goal of helping you create truly unique visuals that perfectly reflect your brand or personal style.
        </p>

        <div className="text-center my-5">
          <img
            src="https://www.napkin.ai/assets/blog/introducting-napkin/visual-2.svg"
            alt="Guide Napkin to Generate"
            style={{ width: '100%', maxWidth: '800px', borderRadius: '12px' }}
          />
        </div>

        <p className="text-muted mt-4" style={{ fontSize: '0.9rem' }}>
          Written by <strong>Pramod Sharma</strong>, Co-founder and CEO of Napkin AI
        </p>
      </>
    ),
  },
};

const BlogDetailPage = () => {
  const { slug } = useParams();
  const blog = blogDetails[slug];

  if (!blog) {
    return <h2 className="text-center mt-5">Blog post not found.</h2>;
  }

  return (
    <div style={{ padding: '80px 5vw', width: '100%' }}>
      <h2 className="fw-bold mb-4" style={{ fontSize: '2rem' }}>{blog.title}</h2>
      <div style={{ fontSize: '1.1rem', color: '#333' }}>{blog.content}</div>
    </div>
  );
};

export default BlogDetailPage;












