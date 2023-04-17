This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Files

The project includes the following files:

pages/index.js: The home page of the website.
pages/products.js: The product listing page, which displays a list of products.
pages/products/[slug].js: The product details page, which displays the details of a single product.
pages/search.js: The search page, which allows users to search for products.
components/Header.js: The header component, which includes the top navigation and search bar.
components/PreviewCard.js: A reusable preview card component used on the home page and product listing page.
components/Hero.js: A reusable hero component used on the home page.
components/Footer.js: The footer component, which includes social media and payment icons.
Technologies Used

## The project uses the following technologies

Next.js: A React framework for building server-side rendered applications.
GraphQL: A query language for APIs.
Saleor API: An open-source e-commerce platform.
Apollo Client: A GraphQL client for React.
Tailwind CSS: A utility-first CSS framework.

## Areas for improvement with more time and effort

- Achieve a more accurate and consistent design to match the LUSH website.
- Implement end-to-end unit testing to ensure comprehensive testing coverage.
- Introduce pagination to enhance the user experience on the product page.
- Include a link to the Instagram page to increase social media engagement.
- Display the product image when on the product description page to provide a more comprehensive view.
- Enhance image quality to optimize the visual presentation.
- Explore additional opportunities for improvement, given sufficient time and resources.
