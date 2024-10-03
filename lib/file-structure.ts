import type { fileType } from "@/types/file";

export const fileStructure: fileType[] = [
    {
        name: "package.json",
        type: "file",
        title: "Package.json",
        description: [
            "It is used to install the dependencies or used to define custom scripts for your application.",
            "For example, if you want to run your application, you can use the script 'pnpm (or npm) run dev'."
        ],
    },
    {
        name: "src",
        type: "folder",
        title: "Source folder",
        description: [
            "This is the source code of your application."
        ],

        children: [
            {
                name: "app",
                type: "folder",
                title: "App folder",
                description: ["This is the app folder of your application."],
                children: [
                    {
                        name: "api",
                        type: "folder",
                        title: "Api route folder",
                        description: [
                            "This is the api route folder.",
                            "Here we define api routes that are used to fetch data from the server or from api's."
                        ],
                        children: [
                            {
                                name: "route.ts",
                                type: "file",
                                title: "Api route file",
                                description: [
                                    "This is a api route file.",
                                    "Here we define the api route of our application."
                                ],
                            }
                        ]
                    },
                    {
                        name: "blogs",
                        type: "folder",
                        children: [
                            {
                                name: "page.tsx",
                                type: "file",
                                title: "Blog page",
                                description: [
                                    "This is a sub page",
                                ],
                            },
                            {
                                name: "[id]/",
                                type: "folder",
                                title: "Dynamic route",
                                description: [
                                    "This is an example of a dynamic route.",
                                    "The page will change depending on the url."
                                ],
                                children: [
                                    {
                                        name: "page.tsx",
                                        type: "file",
                                        title: "Dynamic page",
                                        description: [
                                            "This is a dynamic page.",
                                            "This page will be used to display the dynamic content."
                                        ],
                                    },


                                ]
                            }
                        ]
                    },
                    {
                        name: "page.tsx",
                        type: "file",
                        title: "Page file",
                        description: [
                            "This is a page file.",
                            "Here is where page functions are defined. and where we can pass in the view file to be displayed. or create the page directly in the file."
                        ],
                    },
                    {
                        name: "not-found.tsx",
                        type: "file",
                        title: "Not found page",
                        description: [
                            "This is a not found page.",
                            "If a user tries to access a page that doesn't exist, this page will be displayed instead of throwing an error."
                        ],
                    },
                    {
                        name: "error.tsx",
                        type: "file",
                        title: "Error file",
                        description: [
                            "This is an error file.",
                            "here we can create a custom error page that will be displayed when an error occurs."
                        ],
                    },
                    {
                        name: "loading.tsx",
                        type: "file",
                        title: "Loading file",
                        description: [
                            "This is a loading file.",
                            "The user will see this page when the pages that are under this file are loading in",
                            "It will also show for all children wrapped in a <Suspense> boundary"
                        ],
                    },
                    {
                        name: "layout.tsx",
                        type: "file",
                        title: "Layout file",
                        description: [
                            "A layout file is used to define components or logic shared between all pages.",
                        ],
                    }
                ]
            },
            {
                name: "components",
                type: "folder",
                title: "Components folder",
                description: [
                    "Here is where all the components used in the project are defined."
                ],
                children: [
                    {
                        name: "Button",
                        type: "folder",
                        title: "Component folder",
                        description: [
                            "Smaller components can only use a single script file.",
                            "But for larger components could it be beneficial to create a folder for the component. and split up parts of the component in different files.",
                            "We usually seperate the components logic, styling and types in different files."
                        ],
                        children: [
                            {
                                name: "Button.tsx",
                                type: "file",
                                title: "Button script",
                                description: [
                                    "This is the main file of the component.",
                                    "Here we have the main export and styling of the component."
                                ],
                            },
                            {
                                name: "Button.hooks.ts",
                                type: "file",
                                title: "Button hooks",
                                description: [
                                    "Here we define the hooks of the component.",
                                ],
                            },
                            {
                                name: "Button.type.ts",
                                type: "file",
                                title: "Button type",
                                description: [
                                    "This is a button type.",
                                    "This type is used to define the props of the component."
                                ],
                            }
                        ]
                    }
                ]
            },
            {
                name: "hooks",
                type: "folder",
                title: "Hooks folder",
                description: [
                    "Here we define reusable hooks that can be used throughout the application."
                ],
                children: [
                    {
                        name: "useAuth.ts",
                        type: "file",
                        title: "Auth hook",
                        description: [
                            "This is a auth hook.",
                            "Here we define the logic for the authentication of the application."
                        ],
                    }
                ]
            },
            {
                name: "lib",
                type: "folder",
                children: []
            },
            {
                name: "types",
                type: "folder",
                title: "Types",
                description: [
                    "here we define the types of our application in the case we are using typescript.",
                    "We create custom types to ensure consistency and type safety throughout our application."
                ],
                children: [
                    {
                        name: "Button.type.ts",
                        type: "file",
                        title: "Type file",
                        description: ["in this files we define the types of our application.",
                            "This file will be used in the Button component. to define the props of the component."
                        ],
                    }
                ]
            },
            {
                name: "views",
                type: "folder",
                children: [
                    {
                        name: "Home.tsx",
                        type: "file",
                        title: "View file",
                        description: [
                            "This is the view file of your website. this file is used to display the home page of your website.",
                        ],
                    }
                ]
            },
            {
                name: "utils",
                type: "folder",
                children: []
            }
        ]
    },
    {
        name: "public",
        type: "folder",
        children: [
            {
                name: "favicon.ico",
                type: "file",
                title: "Favicon",
                description: ["This is the favicon of your website. It is used in the browser tab and in the bookmarks."],
            }
        ]
    },
    {
        name: "tailwind.config.js",
        type: "file",
        title: "Tailwind Config",
        description: ["In this file you can configure your tailwind css. For example you can add your own custom colors, fonts, etc."],
    },
    {
        name: "tsconfig.json",
        type: "file",
        title: "Typescript Config",
        description: ["In this file you can configure your typescript rules and paths"],
    },
    {
        name: "biome.json",
        type: "file",
        title: "Biome Config",
        description: ["In this file you can configure your biome if you are using it as your linter/formatter"],
    },
    {
        name: "Next.config.js",
        type: "file",
        title: "Next Config",
        description: ["In this file you can configure your next js. Things like images, fonts, trusted domains, etc."],
    }

]
