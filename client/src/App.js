import React from "react"
import { ApolloProvider } from "react-apollo"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { Provider } from "react-redux"
import client from "./ApolloClient"
import store from "./store"
import HomeView from "./views/HomeView"
import ApartmentView from "./views/ApartmentView"
import Locations from "./views/Locations"
import SearchPage from "./views/SearchPage"

const App = _ => (
	<ApolloProvider client={client}>
		<Provider store={store}>
			<Router>
				<Switch>
					<Route exact path="/" component={HomeView} />
					<Route exact path="/locations" component={Locations} />
					<Route exact path="/apartments/:apartmentId" component={ApartmentView} />
					<Route exact path="/search" component={SearchPage} />
				</Switch>
			</Router>
		</Provider>
	</ApolloProvider>
)
export default App
