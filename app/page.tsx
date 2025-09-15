
import SidebarLayout from "./_components/sidebar-layout";
import ArticlePreview from "./_components/article-preview"
import { CodeEditorPython, CodeEditorRust } from "./_components/sample-demo";







export default function Home() {

  const sampleTabs = [
    {
      id: "optimization-rust",
      title: "Optimization",
      content: <div><CodeEditorRust/></div> ,
    },
    {
      id: "code-style",
      title: "Code stylization",
      content: <div><CodeEditorPython/></div>,
    },
  ]



  const citations = [
    {
      id: "1",
      text: '"LLM-assisted anomaly detection, CI-first ML training, and modular retraining pipelines for telemetry forecasting systems." J-Jparams (2023).',
      url: "https://proceedings.neurips.cc/paper/2020/hash/1f89885d556929e98d3ef9b86448f951-Abstract.html",
    },
        {
      id: "2",
      text: '"Failure-mode simulation, quantized PyTorch inference, and gRPC deployment for causality-aware LEO satellite prediction." Stratosphere AI (2023).',
      url: "https://proceedings.neurips.cc/paper/2020/hash/1f89885d556929e98d3ef9b86448f951-Abstract.html",
    },
        {
      id: "3",
      text: '"Dynamic input interpolation, delta compression, and rollback-safe netcode for server-authoritative FPS multiplayer backend." Latency-Resilient Netcode (2022).',
      url: "https://proceedings.neurips.cc/paper/2020/hash/1f89885d556929e98d3ef9b86448f951-Abstract.html",
    },
  ]




  
  return (
    <>
        <SidebarLayout> 
         <ArticlePreview samples={sampleTabs} citations={citations}  />
        </SidebarLayout>
    </>
  );
}
