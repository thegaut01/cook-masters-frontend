
import create from "zustand";

const useSiteDefaults = create( (set) => ({
   siteDefaults: {
      brand: "cook masters",
      about: "a U.K based school that helps people learn about cultures of the world through food. We want to introduce you to new ingredients that will inspire you to eat more delicious meals at home.",
      copy: " .llc "+ (new Date()).getFullYear() +" .est 2005",
      parent: "Gilbert International",
      studio: ["hammi.co", "Casablanca", "#"],
   }

}))

export default useSiteDefaults;
