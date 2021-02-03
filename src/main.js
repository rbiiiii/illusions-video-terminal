import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        videosList: [{
                source: 'illusions - 01 - Modern Art Illusion by Christof Lauer',
                title: "Titre Video"
            },
            {
                source: 'illusions - 02 - Indonesia Yusuf Tirta performs Modern Art Illusion',
                title: "Titre Video"
            },
            {
                source: 'illusions - 03 - Karen Schwarz es cortada en dos en vivo',
                title: "Titre Video"
            },
            {
                source: 'illusions - 04 - Modern Art Illusion',
                title: "Titre Video"
            },
            {
                source: 'illusions - 05 - มายากลตัดตัวขาด Modern Art illusion',
                title: "Titre Video"
            },
            {
                source: 'illusions - 06 - Sabat Czarownic 5 (próba) - składanie Barbary',
                title: "Titre Video"
            }
        ]
    }
});

export default app;