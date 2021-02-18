import App from './App.svelte';

const app = new App({
    target: document.body,
    props: {
        videosList: [{
                source: 'Auditive_AccelerandoRisset_fr',
                title: "fr"
            },
            {
                source: 'Auditive_AccelerandoRisset_nl',
                title: "nl"
            },
            {
                source: 'Auditive_AccelerandoRisset_de',
                title: "de"
            },
            {
                source: 'Auditive_AccelerandoRisset_en',
                title: "en"
            },
            {
                source: 'Auditive_Doppler_fr',
                title: "fr"
            },
            {
                source: 'Auditive_Doppler_nl',
                title: "nl"
            },
            {
                source: 'Auditive_Doppler_de',
                title: "de"
            },
            {
                source: 'Auditive_Doppler_en',
                title: "en"
            },
            {
                source: 'Auditive_EffetMcGurk_fr',
                title: "fr"
            },
            {
                source: 'Auditive_EffetMcGurk_nl',
                title: "nl"
            },
            {
                source: 'Auditive_EffetMcGurk_de',
                title: "de"
            },
            {
                source: 'Auditive_EffetMcGurk_en',
                title: "en"
            },
            {
                source: 'Auditive_Sheppard_fr',
                title: "fr"
            },
            {
                source: 'Auditive_Sheppard_nl',
                title: "nl"
            },
            {
                source: 'Auditive_Sheppard_de',
                title: "de"
            },
            {
                source: 'Auditive_Sheppard_en',
                title: "en"
            },
            {
                source: 'Auditive_sons3d_fr',
                title: "fr"
            },
            {
                source: 'Auditive_sons3d_nl',
                title: "nl"
            },
            {
                source: 'Auditive_sons3d_de',
                title: "de"
            },
            {
                source: 'Auditive_sons3d_en',
                title: "en"
            },
            {
                source: 'Auditives_hallucinationsauditives_fr',
                title: "fr"
            },
            {
                source: 'Auditives_hallucinationsauditives_nl',
                title: "nl"
            },
            {
                source: 'Auditives_hallucinationsauditives_de',
                title: "de"
            },
            {
                source: 'Auditives_hallucinationsauditives_en',
                title: "en"
            },
        ]
    }
});

export default app;