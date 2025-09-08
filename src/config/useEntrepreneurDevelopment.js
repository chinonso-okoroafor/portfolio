export const useEntrepreneurDevelopment = () => {
    const businesses = [
        {
            id: 1,
            name: "African Food Marketplace",
            role: "Founder & Research Lead",
            duration: "2025 - Present",
            description: "Conducting market research on the challenges faced by Africans in the diaspora across the African food value chain, from sellers to consumers. Insights are driving the development of a digital marketplace app, scheduled for launch in October 2026.",
            keyContributions: [
                { icon: 'fa fa-lightbulb-o', text: "Designed a research framework to identify pain points in sourcing and consuming African food products abroad." },
                { icon: 'fa fa-users', text: "Engaged with diaspora communities to capture cultural, commercial, and logistical perspectives." },
                { icon: 'fa fa-line-chart', text: "Built a business model that integrates ready-to-eat meals, recipes, and ingredients from partner vendors, supported by home delivery." },
                { icon: 'fa fa-globe-americas', text: "Leveraged data-driven methods to shape product development, market positioning, and vendor partnerships." },
                { icon: 'fa fa-hands-helping', text: "Demonstrated entrepreneurial initiative by applying academic knowledge, research skills, and business insight to solve real-world cultural and commercial challenges through digital innovation." },
            ],
            status: "In Development", // Augmenting with a status for visual impact
            launchDate: "October 2026 (Scheduled)",
            tags: ["Market Research", "Diaspora", "Food Tech", "E-commerce", "Digital Innovation", "Cultural Impact"] // Augmenting with tags
        }
    ];

    const getBusinesses = () => {
        return businesses;
    }

    return {
        getBusinesses
    }
}