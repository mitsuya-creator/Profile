import React from "react"
import ContentBlog from "@/components/contentBlog"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
function Blog() {
    return (
        <div className="bg-white-snow w-screen h-full flex justify-center dark:bg-dark-custom">
            <section>
                <Header />
                <ContentBlog />
                <Footer />
            </section>
        </div>
    )
}

export default Blog;