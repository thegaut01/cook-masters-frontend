/* eslint-disable import/no-anonymous-default-export */

const legalDefaults= {
   name: 'Cook Masters',
   site: 'cookmasters.net',
   link: `http://www.cookmasters.net/`,
   address:"28 North Terrace, Liverpool L15, United Kingdom",
   number:["+44-015-155-5285", "+44-015-155-5839"],
   email: 'contact@cookmasters.net',
}

export default {

   "head": {
      "header":"chefs share secrets",
      "discription":"Join industry leading chefs for fun and informative classes on the culinary arts, and rediscover the joy and in your daily cooking routine.",
      "heroVid": "https://res.cloudinary.com/dfd6unksk/video/upload/v1656330449/ookoa6z4k0gz5zgx8at7.mp4", //sitePromo
      "info": [
         {
            "data":"4+",
            "disc":"premium classes",
            "img":"/icon/food.svg",
         },
         {
            "data":"96%",
            "disc":"viewer's satisfaction",
            "img":"/icon/heart.svg",
         },
         {
            "data":"16+",
            "disc":"hours of content",
            "img":"/icon/time.svg",
         },
      ],
      "stats": [21.34, '4.6 avg', 14345, 0.5, 0.85], //[price, base_rating, base_count, multiplier]
   },

   "points": [
      {
         "title":"learn from the\n world's best",
         "subtitle":"watch the masters do their magic",
         "text":" Discover a range of delicious recipes by popular master chefs, Take every detail into account and impress yourself with the foods of the world.",
         "link": ["about us","/about"],
         "image":"/image/feat1.jpg",
      },
      {
         "title":"step by step\n guidance",
         "subtitle":"cooking is process not a talent",
         "text":"Learn to how cook better than restaurants as you discover new ingredients and elevate your cooking skills into new heights",
         "link": ["pick a class","/course"],
         "image":"/image/feat2.jpg",
      },
   ],

   "product": {
      "sponsors": ["/icon/sponsors/brand1.svg", "/icon/sponsors/brand2.svg", "/icon/sponsors/brand3.svg", "/icon/sponsors/brand4.svg",],
   
      "frequent": [
         {
             "title":"When does the course start and finish?",
             "discription":"The course starts now and never ends! It is a completely self-paced online course - you decide when you start and when you finish.",
         },
         {
             "title":"How long do I have access to the course?",
             "discription":"How does lifetime access sound? After enrolling, you have unlimited access to this course for as long as you like - across any and all devices you own.",
         },
         {
             "title":"What if I am unhappy with the course?",
             "discription":"We would never want you to be unhappy! If you are unsatisfied with your purchase, contact us in the first 30 days and we will give you a full refund.",
         },
         {
             "title":"Where can I watch?",
             "discription":"With "+legalDefaults.name+", you can learn anytime, anywhere, including your smartphone, personal computer, and smart TV. You can even download your favorite lessons and watch on the plane or during your commute.",
         },
         {
             "title":"What is "+legalDefaults.name+"?",
             "discription":""+legalDefaults.name+" an istanbul based school that helps people learn about the cultures of the world through food. We want to introduce you to new ingredients that will inspire you to eat more delicious meals at home.",
         },
      ],
   
     "features": [
         {
            "title":"4 minute refund",
            "icon":"/icon/features/feat1.svg",
         },
         {
            "title":"Premium experience",
            "icon":"/icon/features/feat2.svg",
         },
         {
            "title":"Beginner friendly",
            "icon":"/icon/features/feat3.svg",
         },
         {
            "title":"Offline download",
            "icon":"/icon/features/feat4.svg",
         },
         {
            "title":"unlimited users",
            "icon":"/icon/features/feat5.svg",
         },
      ],

   },



   
   "about": {
      "head": {
         "title":"about us",
         "discription":"Cook Masters is a U.K based school that helps people learn about cultures of the world through food. We want to introduce you to new ingredients that will inspire you to eat more delicious meals at home.",
         "image":"/image/about.jpg",
      },
      "items": {
         "features": [{
            "title":"Get to know us",
            "text":"umami pabst, occupy af distillery small batch polaroid sartorial offal disrupt DSA locavore street art plaid. Austin listicle helvetica four loko bitters cliche",
            "image":"/image/about-1.jpg",
         },
         {
            "title":"The best flavors \nfrom around the world",
            "text":"3 wolf moon snackwave irony roof party tattooed beard. Fam heirloom direct trade ramps umami raw denim trust fund hot chicken vaporware four dollar toast hella poke aesthetic.",
            "image":"/image/about-2.jpg",
         },]

      },
   },
   
   "contact": {
      "head": {
         "title":"contact us",
         "discription":"For all inquiries, complaints, or requests for collaboration and business proposals, please refer to the resources below",
         "image":"/image/contact.jpg",
      },
      "items": {
         "email":legalDefaults.email,
         "phone":legalDefaults.number,
         "address":legalDefaults.address,
         "open_days":["tuesday", "friday"],
         "open_hours":["9am", "3pm"],
      },
   },
   
   "legal": {
      "tos": [
         {
            "head": "Terms",
            "body": "By accessing this Website, accessible from "+legalDefaults.link+", you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.",
         },
         {
            "head": "Use License",
            "body": "Permission is granted to temporarily download one copy of the materials on "+legalDefaults.name+"'s Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: \n modify or copy the materials,\n use the materials for any commercial purpose or for any public display,\n attempt to reverse engineer any software contained on "+legalDefaults.name+"'s Website,\n remove any copyright or other proprietary notations from the materials, or\n transferring the materials to another person or \"mirror\" the materials on any other server.\n This will let "+legalDefaults.name+" to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format. These Terms of Service has been created with the help of the Terms Of Service Generator.",
         },
         {
            "head": "Disclaimer",
            "body": "All the materials on "+legalDefaults.name+"’s Website are provided \"as is\". "+legalDefaults.name+" makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, "+legalDefaults.name+" does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.",
         },
         {
            "head":"Limitations",
            "body":""+legalDefaults.name+" or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on "+legalDefaults.name+"’s Website, even if "+legalDefaults.name+" or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.",
         },
         {
            "head":"Revisions and Errata",
            "body":"The materials appearing on "+legalDefaults.name+"’s Website may include technical, typographical, or photographic errors. "+legalDefaults.name+" will not promise that any of the materials in this Website are accurate, complete, or current. "+legalDefaults.name+" may change the materials contained on its Website at any time without notice. "+legalDefaults.name+" does not make any commitment to update the materials.",
         },
         {
            "head":"Links",
            "body":""+legalDefaults.name+" has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by "+legalDefaults.name+" of the site. The use of any linked website is at the user’s own risk.",
         },
         {
            "head":"Site Terms of Use Modifications",
            "body":""+legalDefaults.name+" may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.",
         },
      ],
      "privacy": [
         {
            "head": "Effective Date 01-Jun-2020",
            "body": "This Privacy Policy describes the policies of "+legalDefaults.name+", "+legalDefaults.address+", email: "+legalDefaults.email+", phone: "+legalDefaults.number[0]+" on the collection, use and disclosure of your information that we collect when you use our website ( "+legalDefaults.site+" ). (the “Service”). By accessing or using the Service, you are consenting to the collection, use and disclosure of your information in accordance with this Privacy Policy. If you do not consent to the same, please do not access or use the Service.\nWe may modify this Privacy Policy at any time without any prior notice to you and will post the revised Privacy Policy on the Service. The revised Policy will be effective 180 days from when the revised Policy is posted in the Service and your continued access or use of the Service after such time will constitute your acceptance of the revised Privacy Policy. We therefore recommend that you periodically review this page.",
         },
         {
            "head": "how we use your information",
            "body": "We will use the information that we collect about you (email) for the following purposes:\nMarketing/ Promotional\nCustomer feedback collection\nSupport\nIf we want to use your information for any other purpose, we will ask you for consent and will use your information only on receiving your consent and then, only for the purpose(s) for which grant consent unless we are required to do otherwise by law.",
         },
         {
            "head": "retention of your information",
            "body": "We will retain your personal information with us for 90 days to 2 years after users terminate their accounts or for as long as we need it to fulfill the purposes for which it was collected as detailed in this Privacy Policy. We may need to retain certain information for longer periods such as record-keeping / reporting in accordance with applicable law or for other legitimate reasons like enforcement of legal rights, fraud prevention, etc. Residual anonymous information and aggregate information, neither of which identifies you (directly or indirectly), may be stored indefinitely.",
         },
         {
            "head": "your rights",
            "body": "Depending on the law that applies, you may have a right to access and rectify or erase your personal data or receive a copy of your personal data, restrict or object to the active processing of your data, ask us to share (port) your personal information to another entity, withdraw any consent you provided to us to process your data, a right to lodge a complaint with a statutory authority and such other rights as may be relevant under applicable laws. To exercise these rights, you can write to us at "+legalDefaults.email+". We will respond to your request in accordance with applicable law.\nYou may opt-out of direct marketing communications or the profiling we carry out for marketing purposes by writing to us at "+legalDefaults.email+".\nDo note that if you do not allow us to collect or process the required personal information or withdraw the consent to process the same for the required purposes, you may not be able to access or use the services for which your information was sought.",
         },
         {
            "head": "security",
            "body": "The security of your information is important to us and we will use reasonable security measures to prevent the loss, misuse or unauthorized alteration of your information under our control. However, given the inherent risks, we cannot guarantee absolute security and consequently, we cannot ensure or warrant the security of any information you transmit to us and you do so at your own risk.",
         },
         {
            "head": "third party links",
            "body": "Our Service may contain links to other websites that are not operated by us. This Privacy Policy does not address the privacy policy and other practices of any third parties, including any third party operating any website or service that may be accessible via a link on the Service. We strongly advise you to review the privacy policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.",
         },
         {
            "head": "grievance / data protection officer",
            "body": "If you have any queries or concerns about the processing of your information that is available with us, you may email our Grievance Officer at "+legalDefaults.name+", "+legalDefaults.address+", email: "+legalDefaults.email+". We will address your concerns in accordance with applicable law.",
         },
      ],
      "dmca": [
         {
            "head": "DMCA policy",
            "body": "This Digital Millennium Copyright Act policy (\"Policy\") applies to the "+legalDefaults.link+" website (\"Website\" or \"Service\") and any of its related products and services (collectively, \"Services\") and outlines how this Website operator (\"Operator\", \"we\", \"us\" or \"our\") addresses copyright infringement notifications and how you (\"you\" or \"your\") may submit a copyright infringement complaint.\nProtection of intellectual property is of utmost importance to us and we ask our users and their authorized agents to do the same. It is our policy to expeditiously respond to clear notifications of alleged copyright infringement that comply with the United States Digital Millennium Copyright Act (\";DMCA\") of 1998, the text of which can be found at the U.S. Copyright Office https://www.copyright.gov.",
         },
         {
            "head": "submitting a copyright complaint",
            "body": "Before submitting a copyright complaint to us, consider whether the use could be considered fair use. Fair use states that brief excerpts of copyrighted material may, under certain circumstances, be quoted verbatim for purposes such as criticism, news reporting, teaching, and research, without the need for permission from or payment to the copyright holder. If you have considered fair use, and you still wish to continue with a copyright complaint, you may want to first reach out to the user in question to see if you can resolve the matter directly with the user.\nPlease note that if you are unsure whether the material you are reporting is in fact infringing, you may wish to contact an attorney before filing a notification with us.\nWe may, at our discretion or as required by law, share a copy of your notification or counter-notification with third parties. This may include sharing the information with the account holder engaged in the allegedly infringing activity or for publication.",
         },
         {
            "head": "Notifications of infringement",
            "body": "Filing a DMCA complaint is the start of a pre-defined legal process. Your complaint will be reviewed for accuracy, validity, and completeness. Our response may include the removal or restriction of access to allegedly infringing material.\nIf we remove or restrict access to materials or terminate an account in response to a Notification of alleged infringement, we will make a good faith effort to contact the affected user with information concerning the removal or restriction of access, which may include a full copy of your Notification (including your name, address, phone, and email address), along with instructions for filing a counter-notification.",
         },
         {
            "head": "Counter-notifications",
            "body": "A user who receives a copyright infringement Notification may make a counter-Notification pursuant to sections 512(g)(2) and (3) of the US Copyright Act. If you receive a copyright infringement Notification, it means that the material described in the Notification has been removed from our Services or access to the material has been restricted. Please take the time to read through the Notification, which includes information on the Notification we received. To file a counter-notification with us, you must provide a written communication compliant with the DMCA requirements.\nPlease note that if you are not sure whether certain material infringes the copyrights of others or that the material or activity was removed or restricted by mistake or misidentification, you may wish to contact an attorney before filing a counter-notification.\nNotwithstanding anything to the contrary contained in any portion of this Policy, the Operator reserves the right to take no action upon receipt of a counter-notification. If we receive a counter-notification that complies with the terms of 17 U.S.C. § 512(g), we may forward it to the person who filed the original Notification.",
         },
         {
            "head": "Changes and amendments",
            "body": "We reserve the right to modify this Policy or its terms related to the Website and Services at any time at our discretion. When we do, we will send you an email to notify you. We may also provide notice to you in other ways at our discretion, such as through the contact information you have provided.\nAn updated version of this Policy will be effective immediately upon the posting of the revised Policy unless otherwise specified. Your continued use of the Website and Services after the effective date of the revised Policy (or such other act specified at that time) will constitute your consent to those changes.",
         },
         {
            "head": "Reporting copyright infringement",
            "body": "If you would like to notify us of the infringing material or activity, we encourage you to contact us using the details below:\nThis document was last updated on August 31, 2021",
         },
      ],
   }


}
