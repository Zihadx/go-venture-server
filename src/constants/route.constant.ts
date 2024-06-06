import { blogRoutes } from "../routes/blog.route";
import { countryRoutes } from "../routes/country.route";
import { destinationRoutes } from "../routes/destination.route";
import { hotelRoutes } from "../routes/hotel.route";
import { offerRoutes } from "../routes/offer.route";
import { userRoutes } from "../routes/user.route";

const routes = [
    {
        path: "/users",
        route: userRoutes
    },
    {
        path: "/destinations",
        route: destinationRoutes
    },
    {
        path: "/hotels",
        route: hotelRoutes
    },
    {
        path: "/countries",
        route: countryRoutes
    },
    {
        path: "/blogs",
        route: blogRoutes
    },
    {
        path: "/offers",
        route: offerRoutes
    },
]

export default routes