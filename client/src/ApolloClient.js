import ApolloClient from "apollo-boost"
import { apolloClientUri } from "./constants"

const client = new ApolloClient({
	uri: apolloClientUri
})

export default client
