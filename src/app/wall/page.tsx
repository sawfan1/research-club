import { TextAnimate } from "@/components/magicui/text-animate";
import PaperCard from "@/components/paper-card";

export default function Showcase() {
  return (
    <section className="w-full min-h-screen mx-auto bg-gradient-to-b from-blue-100 to-white">
      <div className="shadow-md w-full h-20 md:h-30 bg-blue-700 flex flex-col items-center justify-center space-y-4">
        <TextAnimate className="text-2xl md:text-3xl font-bold tracking-tighter text-white text-center">
          Research Showcase
        </TextAnimate>
      </div>
      <div className="w-[70%] mx-auto flex flex-col items-center mt-16 gap-8">
        <PaperCard
          title="Advancements in Quantum Computing Architectures"
          author="Safwan Ibn Nahid"
          description="This paper explores the latest advancements in quantum computing architectures, focusing on scalability and error correction techniques.
          It discusses the implications of these advancements for future quantum applications and the challenges that remain in the field."
          datePublished="August 9, 2025"
          tags={["Physics", "Quantum Computing", "Computer Science"]}
          downloadLink="/placeholder.pdf"
          id={1}
        ></PaperCard>
        <PaperCard
          title="Machine Learning Approaches for Climate Change Prediction"
          author="Elena Rodriguez"
          description="This research presents novel machine learning algorithms for predicting climate patterns and extreme weather events. The study combines satellite data with ground-based measurements to improve forecast accuracy and explores the potential for early warning systems in vulnerable regions."
          datePublished="July 15, 2025"
          tags={[
            "Environmental Science",
            "Machine Learning",
            "Climate Research",
          ]}
          downloadLink="/climate-ml-paper.pdf"
          id={2}
        ></PaperCard>

        <PaperCard
          title="Bioengineered Materials for Sustainable Construction"
          author="Marcus Chen"
          description="An investigation into bio-based materials that could revolutionize the construction industry. This paper examines mycelium-based composites, bacterial cellulose, and other living materials for their structural properties, environmental impact, and cost-effectiveness in modern building applications."
          datePublished="June 22, 2025"
          tags={[
            "Materials Science",
            "Biotechnology",
            "Sustainable Engineering",
          ]}
          downloadLink="/bio-materials-construction.pdf"
          id={3}
        ></PaperCard>

        <PaperCard
          title="Neural Interface Technologies for Prosthetic Control"
          author="Sarah Kim"
          description="This study explores brain-computer interfaces that enable direct neural control of prosthetic limbs. The research focuses on signal processing techniques, machine learning algorithms for intention detection, and the development of more intuitive control systems for amputees."
          datePublished="August 3, 2025"
          tags={[
            "Neuroscience",
            "Biomedical Engineering",
            "Artificial Intelligence",
          ]}
          downloadLink="/neural-prosthetics.pdf"
          id={4}
        ></PaperCard>

        <PaperCard
          title="Cryptocurrency Mining and Environmental Impact Analysis"
          author="Ahmed Hassan"
          description="A comprehensive analysis of the environmental costs associated with cryptocurrency mining operations. This paper examines energy consumption patterns, carbon footprint calculations, and proposes sustainable alternatives for blockchain consensus mechanisms."
          datePublished="May 18, 2025"
          tags={["Economics", "Environmental Science", "Blockchain Technology"]}
          downloadLink="/crypto-environmental-impact.pdf"
          id={5}
        ></PaperCard>

        <PaperCard
          title="Gene Therapy Innovations in Rare Disease Treatment"
          author="Priya Patel"
          description="This research presents breakthrough gene therapy techniques for treating rare genetic disorders. The study covers CRISPR applications, viral vector optimization, and clinical trial results for several previously untreatable conditions affecting children and adults."
          datePublished="April 12, 2025"
          tags={["Genetics", "Medicine", "Biotechnology"]}
          downloadLink="/gene-therapy-rare-diseases.pdf"
          id={6}
        ></PaperCard>

        <PaperCard
          title="Urban Vertical Farming: Maximizing Food Security in Megacities"
          author="James Thompson"
          description="An exploration of vertical farming technologies and their potential to address food security challenges in densely populated urban areas. This paper analyzes LED growing systems, hydroponic techniques, and economic models for sustainable urban agriculture implementation."
          datePublished="March 28, 2025"
          tags={["Agriculture", "Urban Planning", "Sustainability"]}
          downloadLink="/vertical-farming-cities.pdf"
          id={7}
        ></PaperCard>
      </div>
    </section>
  );
}
