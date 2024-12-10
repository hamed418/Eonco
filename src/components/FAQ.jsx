import { FaqCard } from "./FaqCard"


const FAQ = () => {

    return (
        <section id="faq" className="container w-full sm:flex sm:mt-10 sm:space-x-6">
            <div className="text-center my-6 md:my-9 items-center">
                <h1 className="text-[76px] max-sm:text-[30px] text-[#f4f5f2] leading-[72px]  font-bold ">Have Questions? </h1>
                <p className="my-5 text-2xl font-bold text-[#f0eaea]">Do you have more questions?</p>
                <div className="bg-[#4c4d4a43] w-fit text-[#FFF0E9] text-[22px] font-[500] px-6 py-3 rounded-[10px] hover:bg-[#abc773] hover:text-black max-sm:px-4 max-sm:py-2 max-sm:text-[1.125rem] flex items-center gap-2 mx-auto cursor-pointer">
                    <i class="ri-phone-fill"></i>
                    <button>Book a call</button>
                </div>
            </div>

            <div className="w-[2/3]" >
                <FaqCard
                    Question="What are your services?"
                    Answer="Our services are endless! Starting from video editing, reels, podcasts to colour correction, motion graphics, text animation, transition, background music to everything you can imagine."
                />
                <FaqCard
                    Question="Do you offer revisions?"
                    Answer="Unlimited revisions just for you! We love you as much as you love us so don't worry about revisions at all."
                />
                <FaqCard
                    Question="When will I get my videos?"
                    Answer="We have the shortest turnaround time in the market, you will get your banger videos within 48-72 hours!"
                />
                <FaqCard
                    Question="Can I Create My Own Custom Package?"
                    Answer="Yes! Creating your own custom package is as easy as scheduling a call with us. It’s the most effective way for us to give you a custom quote
                https://calendly.com/mzmediaofficial"
                />
                <FaqCard
                    Question="Why Wouldn't I Hire a Freelancer?"
                    Answer="Hiring a freelancer for all micro-managementr is hard and doing video editing is a nightmare. Our team got you covered so that you don’t have to deal with freelancers who are careless with deadlines. "
                />
                <FaqCard
                    Question="Can I Use The Package Within a Set Time Period?"
                    Answer="Yes, you can! We don’t have any limitations when it comes to using our packages. You can use up your package within 1 month or prolong the current package until you finish all the services from it. You are allowed to cancel the subscription until you finish the remaining package."
                />
                <FaqCard
                    Question="Do You Offer Any Guarantees?"
                    Answer="Our guarantee is that we work with you until you are completely satisfied with the work that we are doing for you. We have unlimited revisions as a solid guarantee for our services."
                />
                <FaqCard
                    Question="When Will I Experience Growth?"
                    Answer="If you opt-in for a full starter package or any other pre-made package of ours, you will experience growth within 6 months to 1 year. SEO takes time but once it’s all set up, your videos will grow organically on a daily basis generating you views and sales."
                />
                <FaqCard
                    Question="Do You Offer Trials?"
                    Answer="No, we don’t. You can see various of our video testimonials and examples on our website. If you’re looking for the best value for your money, a starter package is the best option."
                />
                <FaqCard
                    Question="Do You Want Only One Service?"
                    Answer="Yes! If you are looking for a video editor, thumbnail designer, or maybe someone who will upload and optimize all your videos for you, we can also offer you individual services. Simply schedule a call with us to get started.
                Feel free to schedule a call with us here https://calendly.com/mzmediaofficial"
                />

            </div>
        </section>
    )
}

export default FAQ