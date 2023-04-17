import { useRouter } from "next/router";
import PreviewCard from "@/components/PreviewCard";
import { GraphQLClient, gql } from "graphql-request";

const endpoint = "https://unicorn-staging.eu.saleor.cloud/graphql/";

const Products = ({ products }) => {
  const router = useRouter();
  const { searchTerm } = router.query;

  const handleClearSearch = () => {
    router.push("/products");
  };

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1 className="font-extrabold text-5xl">Products</h1>

      {searchTerm && (
        <>
          <h2 className="font-extrabold text-3xl my-4">
            Searching for: {searchTerm}
          </h2>
          <button
            onClick={handleClearSearch}
            className='class=" w-[200px] my-6 mx-auto py-3 font-semibold rounded-lg bg-black text-white hover:bg-white hover:text-black'
          >
            clear search
          </button>
        </>
      )}
      <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-6  md:gap-3 md:grid-cols-3 w-full md:p-5 lg:p-10 ">
        {products.map(({ node: { id, name, thumbnail } }) => (
          <PreviewCard
            name={name}
            imageSrc={thumbnail?.url}
            imageAlt={thumbnail?.alt}
            href={`/product/${id}`}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const graphQLClient = new GraphQLClient(endpoint);
  const { searchTerm = "" } = context.query;

  const query = gql`
    query products($searchTerm: String) {
      products(channel: "uk", first: 20, filter: { search: $searchTerm }) {
        edges {
          node {
            id
            name
            thumbnail {
              url
              alt
            }
          }
        }
      }
    }
  `;
  const variables = { searchTerm }; // Define variables object
  const data = await graphQLClient.request(query, variables); // Pass variables object to request method

  return {
    props: {
      products: data.products.edges,
    },
  };
}

export default Products;
