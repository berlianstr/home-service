import { request, gql } from "graphql-request";

const MASTER_URL =
  "https://api-eu-west-2.hygraph.com/v2/clrec5hip2lu001waobk2p5vr/master";

const getSliders = async () => {
  const query = gql`
    query GetSliders {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getCategories = async () => {
  const query = gql`
    query GetCategory {
      categories {
        id
        name
        icon {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessList = async () => {
  const query = gql`
    query getBusinessList {
      businessLists {
        id
        name
        about
        email
        contactPerson
        address
        images {
          url
        }
        category {
          name
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessListByCategory = async (category) => {
  const query =
    gql`
    query getBusinessListByCategory {
      businessLists(where: {category: {name: "` +
    category +
    `"}}) {
        name
        email
        contactPerson
        id
        category {
          name
        }
        address
        about
        images {
          url
        }
      }
    }
    
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export default {
  getSliders,
  getCategories,
  getBusinessList,
  getBusinessListByCategory,
};
