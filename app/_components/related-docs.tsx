

interface Article {
  id: string
  title: string
  category: string
  date: string
  imageUrl: string
  href: string
}




export default function RelatedSystemDocs() {
      const articles: Article[] = [
    {
      id: "1",
      title: "Global news partnerships: Le Monde and Prisa Media",
      category: "Company",
      date: "Mar 13, 2024",
      imageUrl: "/placeholder.svg?height=400&width=400",
      href: "/index/global-news-partnerships-le-monde-and-prisa-media/",
    },
    {
      id: "2",
      title: "Review completed & Altman, Brockman to continue to lead OpenAI",
      category: "Company",
      date: "Mar 8, 2024",
      imageUrl: "/placeholder.svg?height=400&width=400",
      href: "/index/review-completed-altman-brockman-to-continue-to-lead-openai/",
    },
    {
      id: "3",
      title: "OpenAI announces new members to board of directors",
      category: "Company",
      date: "Mar 8, 2024",
      imageUrl: "/placeholder.svg?height=400&width=400",
      href: "/index/openai-announces-new-members-to-board-of-directors/",
    },
  ]




    return (
        <div className="@container w-full">
            <div className="max-w-container mb-md flex items-baseline justify-between">
                <div>
                    <h2 className="text-h4 text-primary-100">Related Docs</h2>
                </div>
                    <a className="transition duration-short ease-curve-a rounded-[2.5rem] text-nowrap min-h-md flex items-center justify-center gap-[0.3em] text-cta focus:outline focus:outline-1 outline-offset-2 h-[2.5rem] min-h-0 text-primary-100 hover:text-primary-60 disabled:text-primary-44 focus:outline-none focus-visible:outline-primary-44 px-0" href="/news/product/">
                            View all project documentation
                    </a>
            </div>

        </div>
    )
}