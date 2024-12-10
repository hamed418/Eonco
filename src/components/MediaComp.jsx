import MediaCompCard from './MediaCompCard';


const MediaComp = () => {
    const creatorFeatures = [
        '8 YouTube videos',
        '8 Shorts',
        'Youtube Thumbnails',
        'Shorts Thumbnails',
        'SEO',
        'Max video length : 15 minutes',
        '24/7 assistance via WhatsApp',
        'Live Updates via dedicated CRM',
    ];

    const beginnerFeatures = [
        '4 YouTube videos',
        '4 Shorts',
        'YouTube Thumbnails',
        'Video running time : 8 mins',
        '24/7 assistance via WhatsApp',
    ];

    const studioFeatures = [
        '16 YouTube videos',
        '16 Shorts',
        'YouTube Thumbnails',
        'Shorts Thumbnails',
        'A/B Thumbnail Split Test',
        'SEO',
        'Max video length : 15 minutes',
        '24/7 assistance via WhatsApp',
        'Content strategy calls',
        'Generate Hooks',
        'Live Updates via dedicated CRM',
    ];

    return (
        <section id='process' className="max-sm:mt-12 max-2xl:mt-32 max-sm:mx-2 md:container">
            <div className="space-y-5 " >
                <h1 className="text-[#ffffff] text-center font-bold max-sm:text-3xl max-md:text-4xl max-2xl:text-6xl">Choose what works for you</h1>
                <p className="text-[#fdfdfd] text-center font-semibold w-[85%] mx-auto max-md:text-sm max-2xl:text-lg">Whether you design alone or with a team, we have a plan that fits your needs, including custom design systems.</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center '>
                <MediaCompCard
                    type="CREATOR"
                    price="$1900"
                    features={creatorFeatures}
                />
                <MediaCompCard
                    type="BEGINNER"
                    price="$950"
                    features={beginnerFeatures}
                />
                <MediaCompCard
                    type="STUDIO"
                    price="$3500"
                    features={studioFeatures}
                />
            </div>

        </section>
    )
}

export default MediaComp