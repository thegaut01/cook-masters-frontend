
export default function Hook(date) {

   function calcTime() {

      let date_1 = new Date();
      let date_2 = new Date(date);
      let difference = date_1.getTime() - date_2.getTime();
      let totalDays = Math.floor(difference / (1000 * 3600 * 24));
      
      if (totalDays>=365) return Math.floor(totalDays/365) +" years"
      if (totalDays>=30) return Math.floor(totalDays/30) +" months"
      if (totalDays>=7) return Math.floor(totalDays/7) +" weeks"
      if (totalDays<7) return Math.floor(totalDays) +" days"

   }

   return calcTime();

}