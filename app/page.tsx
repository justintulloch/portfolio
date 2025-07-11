
import SidebarLayout from "./_components/sidebar-layout";
import ArticlePreview from "./_components/article-preview"






export default function Home() {

  const sampleTabs = [
    {
      id: "fix-code",
      title: "Fix code",
      content: <div>hello</div> ,
    },
    {
      id: "home-security",
      title: "Home security",
      content: <div>Hello</div>,
    },
  ]



  const citations = [
    {
      id: "1",
      text: 'Stiennon, Nisan, et al. "Learning to summarize with human feedback." Advances in Neural Information Processing Systems 33 (2020): 3008-3021.',
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
