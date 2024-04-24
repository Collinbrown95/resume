# hugo Resume

Created from [Start Bootstrap - Resume](https://startbootstrap.com/template-overviews/resume/).
This is basically a single-page website with auto-scrolling based on left-hand nav.  Dedicated project/publications pages allow more detail.

<!-- MarkdownTOC autolink="true" -->

- [Examples](#examples)

- [Setup & Use](#setup--use)
    - [Summary](#summary)
    - [Data files](#data-files)
    - [Projects](#projects)
    - [Publications](#publications)
    - [Blog / Posts](#blog--posts)
    - [Template params](#template-params)
    - [Internationalization](#internationalization)
- [Credits](#credits)
    - [Contributions](#contributions)
    - [Start Bootstrap Resume](#start-bootstrap-resume)

## Setup & Use

This theme uses a combination of a custom archetype `projects` and some data files to drive content.

You can test the provided [exampleSite](exampleSite) after cloning with the command:
`cd exampleSite;hugo -t hugo-resume --themesDir ../.. server`

### Summary
Edit the main `contents/_index.md with a brief bio/summary`

### Data files
Data files are used for simple content presented on the homepage.

- [data/skills.json](https://github.com/eddiewebb/hugo-resume/blob/master/exampleSite/data/skills.json)
- [data/experience.json](https://github.com/eddiewebb/hugo-resume/blob/master/exampleSite/data/experience.json)
- [data/education.json](https://github.com/eddiewebb/hugo-resume/blob/master/exampleSite/data/education.json)


### Projects
Initially projects were in their own JSON file too, but I decided I wanted to allow more detail and custom formatting.
Projects are added to one of 2 subfolders of `creations` or `contributions`. The difference indicates your role as originator or colaborator.   Use `hugo add projects/TYPE/name-of-project.md` to leverage the proper archetype.

### Publications
Similar to projects, create them under `publications`. Include any papers, speaking engagements, articles, etc.

### Blog / Posts
Similar to posts, create them under `blog`. Include any thoughts, musiings, etc.
**This template does not support a `posts` folder**

### Template params

All personal information outside the above details is captured by params in [`config.toml`](https://github.com/eddiewebb/hugo-resume/blob/master/exampleSite/config.toml).

## Credits

This project borrows significantly from the [Hugo Resume](https://github.com/eddiewebb/hugo-resume) Hugo Theme.

### Contributions
The following users have made notable contributions:
- [Anthony Whitford](https://github.com/awhitford)
- [Kaushal Modi](https://github.com/kaushalmodi)
- [Julien Rouse](https://github.com/JulienRouse)

### Start Bootstrap Resume

Start Bootstrap is an open source library of free Bootstrap templates and themes. All of the free templates and themes on Start Bootstrap are released under the MIT license, which means you can use them for any purpose, even for commercial projects.

* https://startbootstrap.com
* https://twitter.com/SBootstrap

Start Bootstrap was created by and is maintained by **[David Miller](http://davidmiller.io/)**, Owner of [Blackrock Digital](http://blackrockdigital.io/).

* http://davidmiller.io
* https://twitter.com/davidmillerskt
* https://github.com/davidtmiller

Start Bootstrap is based on the [Bootstrap](http://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

