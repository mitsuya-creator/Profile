import React from "react"
import Header from "@/components/shared/header"
import CallToAction from "@/components/ctaMessages"
import Footer from "@/components/shared/footer"

function Messages() {
    return (
        <div className="bg-white-snow w-full h-full flex justify-center dark:bg-dark-custom">
            <section>
                <Header />
                <CallToAction />
                <Footer />
            </section>
        </div>
    )
}

export default Messages;