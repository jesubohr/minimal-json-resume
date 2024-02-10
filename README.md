<h1 align="center">
  Minimalist Resume Template
</h1>

A minimalist resume template for developers, based on the [Minimalist Portfolio Project by midudev](https://github.com/midudev/minimalist-portfolio-json). It allows you to generate a resume from a single JSON file. Built with Astro and Tailwind CSS.

## ✨ Features

- **Single JSON file**: All your data is stored in a single JSON file.
- **Dark mode**: Toggle between light and dark mode.
- **Responsive**: Works on all devices.
- **SEO**: Optimized for search engines.
- **Performance**: Blazing fast.

## 👨🏻‍💻 Getting started

1. Use this repo as a template for a new Astro project or clone it directly: 
> I use [pnpm](https://pnpm.io/) as the package manager, but you can use npm or yarn as well.

```bash
pnpm create astro@latest -- --template jesubohr/minimalist-portfolio-json
```

2. Configure the data in the `src/cv.json` file to match your information.

3. Start the development server:

```bash
pnpm dev
```

4. Open [http://localhost:4321](http://localhost:4231) in your browser to see the result.

## 📄 Structure of the JSON file

The structure of the JSON file is based on the schema of the [JSON Resume](https://jsonresume.org/schema/) project. You can find an example in the `src/cv.json` file.

```json
{
  "basics": {
    "name": "John Doe",
    "label": "Programmer",
    "image": "",
    "email": "john@gmail.com",
    "phone": "(912) 555-4321",
    "url": "https://johndoe.com",
    "summary": "A summary of John Doe…",
    "location": {
      "city": "San Francisco",
      "countryCode": "US",
      "region": "California"
    },
    "profiles": [{
      "network": "Twitter",
      "username": "john",
      "url": "https://twitter.com/john"
    }]
  },
  "work": [{
    "name": "Company",
    "position": "President",
    "url": "https://company.com",
    "startDate": "2013-01-01",
    "endDate": "2014-01-01",
    "summary": "Description…",
    "highlights": [
      "Started the company"
    ]
  }],
  "education": [{
    "institution": "University",
    "url": "https://institution.com/",
    "area": "Software Development",
    "studyType": "Bachelor",
    "startDate": "2011-01-01",
    "endDate": "2013-01-01",
    "score": "4.0",
    "courses": [
      "DB1101 - Basic SQL"
    ]
  }],
  "projects": [{
    "name": "Project",
    "description": "Description...",
    "highlights": [
      "Won award at AIHacks 2016"
    ],
    "url": "https://project.com/"
  }]
}
```

## 🚀 Deployment

You can deploy this project to Vercel, Netlify, or any other platform that supports Astro.

## License

This project is open source and available under the [MIT License](LICENSE).
