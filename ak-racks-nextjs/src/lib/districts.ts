// All 38 Districts of Tamil Nadu
export interface District {
  name: string;
  slug: string;
  description: string;
  majorCities: string[];
}

export const districts: District[] = [
  { name: 'Chennai', slug: 'chennai', description: 'Capital city and major commercial hub', majorCities: ['Tambaram', 'Velachery', 'T. Nagar', 'Anna Nagar'] },
  { name: 'Coimbatore', slug: 'coimbatore', description: 'Manchester of South India', majorCities: ['Gandhipuram', 'RS Puram', 'Peelamedu', 'Saibaba Colony'] },
  { name: 'Madurai', slug: 'madurai', description: 'Temple city with rich heritage', majorCities: ['Meenakshi Temple Area', 'Anna Nagar', 'KK Nagar', 'Alanganallur'] },
  { name: 'Tiruchirappalli', slug: 'trichy', description: 'Rock Fort city', majorCities: ['Srirangam', 'Thillai Nagar', 'Woraiyur', 'Cantonment'] },
  { name: 'Salem', slug: 'salem', description: 'Steel city of Tamil Nadu', majorCities: ['Omalur', 'Attur', 'Mettur', 'Edappadi'] },
  { name: 'Erode', slug: 'erode', description: 'Turmeric city', majorCities: ['Bhavani', 'Gobichettipalayam', 'Perundurai', 'Sathyamangalam'] },
  { name: 'Tiruppur', slug: 'tiruppur', description: 'Knitwear capital of India', majorCities: ['Avinashi', 'Palladam', 'Udumalpet', 'Dharapuram'] },
  { name: 'Vellore', slug: 'vellore', description: 'Fort city', majorCities: ['Katpadi', 'Gudiyatham', 'Ambur', 'Vaniyambadi'] },
  { name: 'Ranipet', slug: 'ranipet', description: 'Industrial hub', majorCities: ['Walajapet', 'Arcot', 'Sholinghur', 'Arakkonam'] },
  { name: 'Kanchipuram', slug: 'kanchipuram', description: 'Silk city', majorCities: ['Sriperumbudur', 'Uthiramerur', 'Walajabad', 'Chengalpattu'] },
  { name: 'Chengalpattu', slug: 'chengalpattu', description: 'Gateway to Chennai', majorCities: ['Mahabalipuram', 'Tambaram', 'Guduvancheri', 'Kelambakkam'] },
  { name: 'Villupuram', slug: 'villupuram', description: 'Agricultural district', majorCities: ['Tindivanam', 'Gingee', 'Ulundurpet', 'Kallakurichi'] },
  { name: 'Cuddalore', slug: 'cuddalore', description: 'Port town', majorCities: ['Chidambaram', 'Virudhachalam', 'Panruti', 'Neyveli'] },
  { name: 'Thanjavur', slug: 'thanjavur', description: 'Rice bowl of Tamil Nadu', majorCities: ['Kumbakonam', 'Pattukottai', 'Orathanadu', 'Thiruvaiyaru'] },
  { name: 'Nagapattinam', slug: 'nagapattinam', description: 'Coastal district', majorCities: ['Velankanni', 'Sirkazhi', 'Mayiladuthurai', 'Tharangambadi'] },
  { name: 'Mayiladuthurai', slug: 'mayiladuthurai', description: 'Temple town', majorCities: ['Sirkazhi', 'Poompuhar', 'Kuthalam', 'Kollidam'] },
  { name: 'Thiruvarur', slug: 'thiruvarur', description: 'Cultural district', majorCities: ['Mannargudi', 'Needamangalam', 'Thiruthuraipoondi', 'Kodavasal'] },
  { name: 'Pudukottai', slug: 'pudukottai', description: 'Historic district', majorCities: ['Aranthangi', 'Alangudi', 'Karambakudi', 'Thirumayam'] },
  { name: 'Karur', slug: 'karur', description: 'Textile city', majorCities: ['Kulithalai', 'Aravakurichi', 'Krishnarayapuram', 'Pugalur'] },
  { name: 'Namakkal', slug: 'namakkal', description: 'Egg city', majorCities: ['Tiruchengode', 'Rasipuram', 'Paramathi Velur', 'Kolli Hills'] },
  { name: 'Dindigul', slug: 'dindigul', description: 'Lock city', majorCities: ['Palani', 'Oddanchatram', 'Kodaikanal', 'Natham'] },
  { name: 'Theni', slug: 'theni', description: 'Cardamom city', majorCities: ['Periyakulam', 'Bodinayakanur', 'Chinnamanur', 'Cumbum'] },
  { name: 'Virudhunagar', slug: 'virudhunagar', description: 'Firecracker city', majorCities: ['Sivakasi', 'Rajapalayam', 'Srivilliputhur', 'Aruppukkottai'] },
  { name: 'Ramanathapuram', slug: 'ramanathapuram', description: 'Coastal heritage', majorCities: ['Rameswaram', 'Paramakudi', 'Mandapam', 'Kamuthi'] },
  { name: 'Sivagangai', slug: 'sivagangai', description: 'Historic town', majorCities: ['Karaikudi', 'Devakottai', 'Tirupathur', 'Manamadurai'] },
  { name: 'Thoothukudi', slug: 'thoothukudi', description: 'Pearl city', majorCities: ['Tiruchendur', 'Kovilpatti', 'Kayalpattinam', 'Ettayapuram'] },
  { name: 'Tirunelveli', slug: 'tirunelveli', description: 'Halwa city', majorCities: ['Palayamkottai', 'Sankarankovil', 'Ambasamudram', 'Cheranmahadevi'] },
  { name: 'Tenkasi', slug: 'tenkasi', description: 'Spa city', majorCities: ['Courtallam', 'Shencottai', 'Kadayanallur', 'Sankarankovil'] },
  { name: 'Kanniyakumari', slug: 'kanniyakumari', description: 'Land\'s end', majorCities: ['Nagercoil', 'Marthandam', 'Padmanabhapuram', 'Sucheendram'] },
  { name: 'Krishnagiri', slug: 'krishnagiri', description: 'Mango city', majorCities: ['Hosur', 'Denkanikottai', 'Pochampalli', 'Shoolagiri'] },
  { name: 'Dharmapuri', slug: 'dharmapuri', description: 'Land of warriors', majorCities: ['Palacode', 'Pennagaram', 'Harur', 'Nallampalli'] },
  { name: 'Nilgiris', slug: 'nilgiris', description: 'Blue mountains', majorCities: ['Ooty', 'Coonoor', 'Kotagiri', 'Gudalur'] },
  { name: 'Ariyalur', slug: 'ariyalur', description: 'Cement city', majorCities: ['Jayankondam', 'Sendurai', 'Udayarpalayam', 'Andimadam'] },
  { name: 'Perambalur', slug: 'perambalur', description: 'Small district', majorCities: ['Kunnam', 'Veppanthattai', 'Alathur', 'Chettikulam'] },
  { name: 'Kallakurichi', slug: 'kallakurichi', description: 'Agricultural hub', majorCities: ['Ulundurpet', 'Sankarapuram', 'Chinnasalem', 'Tirukoilur'] },
  { name: 'Tirupattur', slug: 'tirupattur', description: 'Educational hub', majorCities: ['Ambur', 'Vaniyambadi', 'Natrampalli', 'Jolarpet'] },
];

export const getDistrictBySlug = (slug: string): District | undefined => {
  return districts.find(d => d.slug === slug);
};

export const getAllDistrictSlugs = (): string[] => {
  return districts.map(d => d.slug);
};
