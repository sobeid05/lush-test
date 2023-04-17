import React from "react";
import { GraphQLClient, gql } from "graphql-request";
import { useRouter } from "next/router";
import Link from "next/link";

const endpoint = "https://unicorn-staging.eu.saleor.cloud/graphql/";

const Product = ({ product }) => {
  const router = useRouter();
  const description = JSON.parse(product.description);

  const handleBackToProducts = () => {
    router.push("/products");
  };

  console.log(description.blocks);
  return (
    <div className="max-w-2xl mx-auto mt-10 px-4 h-fit">
      <h1 className="text-4xl font-bold mb-6">{product.name}</h1>
      {description.blocks.map(({ data, id }, index) => (
        <div key={id} dangerouslySetInnerHTML={{ __html: data.text }} />
      ))}
      <p className="border border-gray-400 text-center rounded-lg p-2 text-3xl hover:bg-gray-100 hover:shadow-md transition-all duration-200">
        Price: £{product.pricing.priceRange.start.net.amount}
      </p>
      <div className="flex justify-center mt-10">
        <button
          onClick={handleBackToProducts}
          className="h-10 px-6 font-semibold rounded-lg bg-black text-white hover:bg-gray-400 hover:text-black my-4"
        >
          Back to Products
        </button>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const graphQLClient = new GraphQLClient(endpoint);

  const query = gql`
    query Product($id: ID!) {
      product(id: $id, channel: "uk") {
        id
        name
        description
        pricing {
          priceRange {
            start {
              net {
                amount
              }
            }
          }
        }
      }
    }
  `;

  const data = await graphQLClient.request(query, { id: params.productId });

  return {
    props: {
      product: data.product,
    },
  };
}

export default Product;
