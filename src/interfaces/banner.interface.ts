interface Location {
    city: string;
    country: string;
  }
  
  interface Banner {
    id: number;
    title: string;
    description: string;
    locations: Location;
    image: string;
  }
  
  export { Banner, Location };
  