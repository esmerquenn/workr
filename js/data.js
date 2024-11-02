const last_personal_info = {
  marshrut: "",
  marshrut_cordinant: "",
  transfer_type: "one_way",
  pickup_date: "",
  pickup_time: "",
  total_distance: "",
  total_time: "",
  passenger: "",
  bag: "",
  standart: "",
  vehicle: {},
  vehicle_id: null,
  type: "",
  name: "",
  surname: "",
  email: "",
  phone: "",
  message: "",
  bus: "",
  total_amount: 0,
};

let times = [
  "0:00",
  "0:30",
  "1:00",
  "1:30",
  "2:00",
  "2:30",
  "3:00",
  "3:30",
  "4:00",
  "4:30",
  "5:00",
  "5:30",
  "6:00",
  "6:30",
  "7:00",
  "7:30",
  "8:00",
  "8:30",
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "22:00",
  "23:30",
  "23:00",
  "24:00",
  "24:30",
];

const cars = [
  {
    vehicle_id: 1,
    img: "assets/img/vito.jpg",
    vehicle_name: "Vito",
    vehicle_type: "Minivan",
    price: 35
  },
  {
    vehicle_id: 2,
    img: "assets/img/vito.jpg",
    vehicle_name: "Vito",
    vehicle_type: "Minivan",
    price: 25
  },
  {
    vehicle_id: 3,
    img: "assets/img/vito.jpg",
    vehicle_name: "Vito",
    vehicle_type: "Minivan",
    price: 90
  },
  {
    vehicle_id: 4,
    img: "assets/img/vito.jpg",
    vehicle_name: "Vito",
    vehicle_type: "Minivan",
    price: 40
  },
  {
    vehicle_id: 5,
    img: "assets/img/vito.jpg",
    vehicle_name: "Vito",
    vehicle_type: "Minivan",
    price: 20
  },
  {
    vehicle_id: 6,
    img: "assets/img/vito.jpg",
    vehicle_name: "Vito",
    vehicle_type: "Minivan",
    price: 15
  },
  {
    vehicle_id: 7,
    img: "assets/img/vito.jpg",
    vehicle_name: "Vito",
    vehicle_type: "Minivan",
    price: 20
  },
];

// let step_document = [

//   {
//     id: 1,
//     data: `<div class="w-full bg-white py-4 flex flex-wrap md:flex-nowrap gap-4">
//               <div class="w-full md:w-1/4 order-2 md:order-1">
//                 <div class="p-6 bg-[#f9fafb] border">
//                   <h2 class="text-xl tt font-medium">Təfərrüatlar</h2>
//                   <div class="space-y-3 text-sm">
//                     <div class="border-b-2 border-[#84909A] py-4">
//                       <p class="font-medium text-base tt">Servis tipi</p>
//                       <p class="font-normal text-sm">Standart qiymət</p>
//                     </div>
//                     <div class="border-b-2 border-[#84909A] py-4">
//                       <p class="font-medium text-base tt">Transfer tipi</p>
//                       <p>Bir istiqamət</p>
//                     </div>
//                     <div class="border-b-2 border-[#84909A] py-4">
//                       <p class="font-medium text-base tt">Marşrut</p>
//                       <p>Hava limanı - Şəhər mərkəzi</p>
//                     </div>
//                     <div class="border-b-2 border-[#84909A] py-4">
//                       <p class="font-medium text-base tt">Götürmə tarixi və zamanı</p>
//                       <p>15/10/2024 20:00</p>
//                     </div>
//                     <div class="border-b-2 border-[#84909A] py-4">
//                       <p class="font-medium text-base tt">Ümumi məsafə</p>
//                       <p>25.5 km</p>
//                     </div>
//                     <div class="border-b-2 border-[#84909A] py-4">
//                       <p class="font-medium text-base tt">Ümumi vaxt</p>
//                       <p>0 saat 32 dəq</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="mt-10 border-t border-gray-300 pt-10 flex justify-between items-center">
//                   <p class="text-xl font-medium">Ümumi</p>
//                   <p class="text-xl font-medium">00.00 ₼</p>
//                 </div>
//               </div>
    
//               <div class="md:w-3/4 order-1 md:order-2">
//                 <div class="bg-red-500 text-white text-center py-5">
//                   <h2 class="text-base md:text-xl tt font-medium">AVTOMOBİL FİLTERİ</h2>
//                 </div>
//                 <div class="grid md:grid-cols-2 sm:grid-cols-4 mb-4">
//                   <div class="bg-white border pr-2">
//                     <label for="email" class="block text-base tt px-4 pt-4 font-medium">Sərnişinlər</label>
//                     <select name="" id="" class="w-full p-2 focus:outline-none">
//                       <option value="">1</option>
//                       <option value="">2</option>
//                       <option value="">3</option>
//                     </select>
//                   </div>
//                   <div class="bg-white border pr-2">
//                     <label for="email" class="block text-base tt px-4 pt-4 font-medium">Çamadanlar</label>
//                     <select name="" id="" class="w-full p-2 focus:outline-none">
//                       <option value="">1</option>
//                       <option value="">2</option>
//                       <option value="">3</option>
//                     </select>
//                   </div>
//                   <div class="bg-white border pr-2">
//                     <label for="email" class="block text-base tt px-4 pt-4 font-medium">Standart</label>
//                     <select name="" id="" class="w-full p-2 focus:outline-none">
//                       <option value="">1</option>
//                       <option value="">2</option>
//                       <option value="">3</option>
//                     </select>
//                   </div>
//                   <div class="bg-white border pr-2">
//                     <label for="email" class="block text-base tt px-4 pt-4 font-medium">Tip</label>
//                     <select name="" id="" class="w-full p-2 focus:outline-none">
//                       <option value="">Bütün avtomobillər</option>
//                       <option value="">Bütün avtomobillər</option>
//                       <option value="">Bütün avtomobillər</option>
//                     </select>
//                   </div>
//                 </div>
    
//                 <div class=" vehicle_box grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  
//                   <div class="card p-5 bg-[#f9fafb] border rounded-md">
//                     <img
//                       src="./assets/img/vito.jpg"
//                       alt="Mercedes Vito"
//                       class="w-full h-auto mb-4 border shadow-md border-[#dddfe1] rounded-sm"
//                     />
//                     <h3 class="text-2xl tt font-semibold">Mercedes Vito</h3>
//                     <div class="flex justify-between items-center my-3">
//                       <span>
//                         <span class="text-base text-[#84909A] font-medium pr-4 border-r border-[#84909a]"
//                           ><i class="fa-solid fa-user-group text-xl mr-1"></i> 3
//                         </span>
//                         <span class="text-base text-[#84909A] font-medium px-4"
//                           ><i class="fa-solid fa-briefcase text-xl mr-1"></i> 3
//                         </span>
//                       </span>
//                       <span class="text-xl font-medium tt text-[#84909a]">35 ₼ </span>
//                     </div>
//                     <button
                      
//                       class="py-2 w-full lg:py-3 px-6 border-2 border-[#FB3D27] hover:bg-[#FB3D27] duration-300 transition text-base hover:text-white rounded-full"
//                     >
//                       Seçim et
//                     </button>
//                   </div>
//                   <div class="card p-5 bg-[#f9fafb] border rounded-md">
//                     <img
//                       src="./assets/img/vito.jpg"
//                       alt="Mercedes Vito"
//                       class="w-full h-auto mb-4 border shadow-md border-[#dddfe1] rounded-sm"
//                     />
//                     <h3 class="text-2xl tt font-semibold">Mercedes Vito</h3>
//                     <div class="flex justify-between items-center my-3">
//                       <span>
//                         <span class="text-base text-[#84909A] font-medium pr-4 border-r border-[#84909a]"
//                           ><i class="fa-solid fa-user-group text-xl mr-1"></i> 3
//                         </span>
//                         <span class="text-base text-[#84909A] font-medium px-4"
//                           ><i class="fa-solid fa-briefcase text-xl mr-1"></i> 3
//                         </span>
//                       </span>
//                       <span class="text-xl font-medium tt text-[#84909a]">35 ₼ </span>
//                     </div>
//                     <button
                      
//                       class="py-2 w-full lg:py-3 px-6 border-2 border-[#FB3D27] hover:bg-[#FB3D27] duration-300 transition text-base hover:text-white rounded-full"
//                     >
//                       Seçim et
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>`,
//   },
//   {
//     id: 2,
//     data: `<div class="w-full bg-white py-4 flex flex-wrap md:flex-nowrap gap-4">
//               <div class="w-full md:w-1/3 xl:w-1/4 order-2 md:order-1">
//                 <div class="p-6 bg-[#f9fafb] border">
//                   <h2 class="text-xl tt font-medium">Təfərrüatlar</h2>
//                   <div class="space-y-3 text-sm">
//                     <div class="border-b-2 border-[#84909A] py-4">
//                       <p class="font-medium text-base tt">Servis tipi</p>
//                       <p class="font-normal text-sm">Standart qiymət</p>
//                     </div>
//                     <div class="border-b-2 border-[#84909A] py-4">
//                       <p class="font-medium text-base tt">Transfer tipi</p>
//                       <p>Bir istiqamət</p>
//                     </div>
//                     <div class="border-b-2 border-[#84909A] py-4">
//                       <p class="font-medium text-base tt">Marşrut</p>
//                       <p>Hava limanı - Şəhər mərkəzi</p>
//                     </div>
//                     <div class="border-b-2 border-[#84909A] py-4">
//                       <p class="font-medium text-base tt">Götürmə tarixi və zamanı</p>
//                       <p>15/10/2024 20:00</p>
//                     </div>
//                     <div class="border-b-2 border-[#84909A] py-4">
//                       <p class="font-medium text-base tt">Ümumi məsafə</p>
//                       <p>25.5 km</p>
//                     </div>
//                     <div class="border-b-2 border-[#84909A] py-4">
//                       <p class="font-medium text-base tt">Ümumi vaxt</p>
//                       <p>0 saat 32 dəq</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="mt-10 border-t border-gray-300 pt-10 flex justify-between items-center">
//                   <p class="text-xl font-medium">Ümumi</p>
//                   <p class="text-xl font-medium">00.00 ₼</p>
//                 </div>
//               </div>
//               <div class="w-full md:w-2/3 xl:w-3/4 order-1 md:order-2">
//                 <div class="flex-1">
//                   <div class="bg-red-500 text-white text-center py-5">
//                     <h2 class="text-base md:text-xl tt font-medium uppercase">Əlaqə məlumatları</h2>
//                   </div>
//                   <form>
//                     <div class="grid grid-cols-1 md:grid-cols-2">
//                       <div class="bg-white border">
//                         <label for="name" class="block text-base tt px-4 pt-4 font-medium">Ad</label>
//                         <input type="text" id="name" name="name" class="w-full p-2 focus:outline-none" />
//                       </div>
//                       <div class="bg-white border">
//                         <label for="surname" class="block text-base tt px-4 pt-4 font-medium">Soyad</label>
//                         <input type="text" id="surname" name="surname" class="w-full p-2 focus:outline-none" />
//                       </div>
//                     </div>
//                     <div class="grid grid-cols-1 md:grid-cols-2">
//                       <div class="bg-white border">
//                         <label for="email" class="block text-base tt px-4 pt-4 font-medium">E-mail ünvanı</label>
//                         <input type="email" id="email" name="email" class="w-full p-2 focus:outline-none" />
//                       </div>
//                       <div class="bg-white border">
//                         <label for="phone" class="block text-base tt px-4 pt-4 font-medium">Telefon</label>
//                         <input
//                           type="tel"
//                           id="phone"
//                           name="phone"
//                           placeholder="+994 00 123 45 67"
//                           class="w-full p-2 focus:outline-none"
//                         />
//                       </div>
//                     </div>
//                     <div class="bg-white border">
//                       <label for="message" class="block text-base tt px-4 pt-4 font-medium">Sifariş üçün əlavə qeydlər</label>
//                       <textarea id="message" name="message" rows="4" class="w-full border-0 p-2 focus:outline-none"></textarea>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div> `,
//   },
//   {
//     id: 3,
//     data: ` <div class="w-full bg-white py-4 flex flex-wrap md:flex-nowrap gap-4">
//               <div class="w-full md:w-1/4 order-2 md:order-1">
//                 <div class="p-6 bg-[#f9fafb] border">
//                   <div class="space-y-3 text-sm">
//                     <h2 class="text-xl tt font-medium">Sürüş detalları</h2>
    
//                     <div class="border-b-2 border-[#84909A] pb-2 m-0">
//                       <p class="font-medium text-base tt">Ad</p>
//                       <p class="font-normal text-sm">Yusif</p>
//                     </div>
//                     <div class="border-b-2 border-[#84909A] py-1 m-0">
//                       <p class="font-medium text-base tt">Soyad</p>
//                       <p>Rzayev</p>
//                     </div>
//                     <div class="border-b-2 border-[#84909A] py-1">
//                       <p class="font-medium text-base tt">E-mail ünvanı</p>
//                       <p>user"gmail.com</p>
//                     </div>
//                     <div class="border-b-2 border-[#84909A] py-41">
//                       <p class="font-medium text-base tt">Telefon</p>
//                       <p>+994503344549</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div class="w-full md:w-1/4 order-2 md:order-1">
//                 <div class="p-6 bg-[#f9fafb] border">
//                   <div class="space-y-3 text-sm">
//                     <div class="py-1">
//                       <iframe
//                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194472.76853012154!2d49.690149090376366!3d40.39473700796155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrw7w!5e0!3m2!1str!2saz!4v1730363842435!5m2!1str!2saz"
//                         width="100%"
//                         height="125"
//                         style="border: 0"
//                         allowfullscreen=""
//                         loading="lazy"
//                         referrerpolicy="no-referrer-when-downgrade"
//                       ></iframe>
//                     </div>
//                     <h2 class="text-xl tt font-medium">Sürüş detalları</h2>
    
//                     <div class="border-b-2 border-[#84909A] pb-2 m-0">
//                       <p class="font-medium text-base tt">Servis tipi</p>
//                       <p class="font-normal text-sm">Standart qiymət</p>
//                     </div>
//                     <div class="border-b-2 border-[#84909A] py-1 m-0">
//                       <p class="font-medium text-base tt">Transfer tipi</p>
//                       <p>Bir istiqamət</p>
//                     </div>
//                     <div class="border-b-2 border-[#84909A] py-1">
//                       <p class="font-medium text-base tt">Marşrut</p>
//                       <p>Hava limanı - Şəhər mərkəzi</p>
//                     </div>
//                     <div class="border-b-2 border-[#84909A] py-41">
//                       <p class="font-medium text-base tt">Götürmə tarixi və zamanı</p>
//                       <p>15/10/2024 20:00</p>
//                     </div>
//                     <div class="border-b-2 border-[#84909A] py-1">
//                       <p class="font-medium text-base tt">Ümumi məsafə</p>
//                       <p>25.5 km</p>
//                     </div>
//                     <div class="border-b-2 border-[#84909A] py-1">
//                       <p class="font-medium text-base tt">Ümumi vaxt</p>
//                       <p>0 saat 32 dəq</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
    
//               <div class="md:w-2/4 order-1 md:order-2">
//                 <div class="card p-5 bg-[#f9fafb] border ">
//                   <img
//                     src="./assets/img/vito.jpg"
//                     alt="Mercedes Vito"
//                     class="w-full h-auto mb-4 border shadow-md border-[#dddfe1] rounded-sm"
//                   />
//                   <h3 class="text-2xl tt font-semibold">Mercedes Vito</h3>
//                   <div class="flex justify-between items-center my-3">
//                     <span>
//                       <span class="text-base text-[#84909A] font-medium pr-4 border-r border-[#84909a]"
//                         ><i class="fa-solid fa-user-group text-xl mr-1"></i> 3
//                       </span>
//                       <span class="text-base text-[#84909A] font-medium px-4"
//                         ><i class="fa-solid fa-briefcase text-xl mr-1"></i> 3
//                       </span>
//                     </span>
//                     <span class="text-xl font-medium tt text-[#84909a]">35 ₼ </span>
//                   </div>
//                 </div>
//                 <div class="mt-10 border-t border-gray-300 pt-10 flex justify-between items-center">
//                   <p class="text-xl font-medium">Ümumi</p>
//                   <p class="text-xl font-medium">00.00 ₼</p>
//                 </div>
//               </div>
//             </div>`,
//   },
// ];
