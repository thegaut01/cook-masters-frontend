
export default function Hook(stats) {

   const [price, base_rating, base_count, discount, multiplier] = stats;

   function calcStats() {

      const discountRate = ()=> (discount) * 100; 
      const productPrice = ()=> price*(1-discount).toFixed(2); 
      const calcReviewCount = ()=> base_count; 
      const calcProductRating = ()=> base_rating; 
      const calcUserCount = ()=> (base_count*10*multiplier).toFixed(); 
      
      return [price, productPrice(), calcProductRating(), calcReviewCount(), calcUserCount(), discountRate()]

   }

   return calcStats();

   // Consume like this>>
   // const [initialPrice, productPrice, productRating, reviewCount, userCount, discountRate] = useGetStats(data.stats);

}