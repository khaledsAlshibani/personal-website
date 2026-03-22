# Personal website

My personal website built with TanStack Start.

Website: [khaled.technway.biz](https://khaled.technway.biz/)

## Setup

Copy `.env.example` to `.env` and fill in the values. then run:

```bash
pnpm install

pnpm dev

pnpm codegen
```

## Event Tracking

This project uses [PostHog](https://posthog.com/) for event tracking and analytics. Below are the properties captured for each event:

### page_view

Tracked automatically on every route change.

| Property       | Description                            |
| :------------- | :------------------------------------- |
| `$current_url` | The full URL of the page being viewed. |
| `$referrer`    | The URL of the previous page.          |
| `$browser`     | The browser used by the visitor.       |
| `site_url`     | The base URL of the website.           |

### project_clicked

Tracked when a project card or link is clicked.

| Property       | Description                               |
| :------------- | :---------------------------------------- |
| `project_name` | The name of the project that was clicked. |
| `site_url`     | The base URL of the website.              |

### contact_clicked

Tracked when a social media icon or contact link is clicked.

| Property           | Description                                                                   |
| :----------------- | :---------------------------------------------------------------------------- |
| `contact_platform` | The specific platform clicked (e.g., `linkedin`, `x`, `facebook`, `codepen`). |
| `site_url`         | The base URL of the website.                                                  |

### github_link_clicked

Tracked when any link pointing to GitHub is clicked.

| Property   | Description                               |
| :--------- | :---------------------------------------- |
| `url`      | The specific GitHub URL that was clicked. |
| `site_url` | The base URL of the website.              |

### scroll_depth

Tracked at specific percentage milestones of the page height.

| Property           | Description                                                 |
| :----------------- | :---------------------------------------------------------- |
| `depth_percentage` | The percentage milestone reached (`25`, `50`, `75`, `100`). |
| `site_url`         | The base URL of the website.                                |

### Configuration

Tracking is initialized via `PostHogProvider` in `src/routes/__root.tsx`.

- **Development Mode:** Events are **always** logged to the console and **never** sent to the PostHog API.
- **Production Mode:**
  - Events are **always** sent to the PostHog API.
  - **Debug Mode:** If `VITE_PUBLIC_POSTHOG_DEBUG` is set to `true`, events will be logged to the console **and** sent to the PostHog API.
