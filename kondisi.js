//conditional Variabel
const cevrolet = 1999;
const Mobil = cevrolet > 2000 ? "Mobil masih ok" : "Mobil Harus DIcek Berkala";
console.log(Mobil)

//Manipulasi data Array dengan map dan filter
const Kendaraan = [
    {
      Merk: "H2R",
      Tahun: 2024,
      Harga: 860000000
    },
    {
      Merk: "Beat",
      Tahun: 2011,
      Harga: 12000000
    },
    {
      Merk: "Vario",
      Tahun: 2024,
      Harga: 30000000
    }
  
  ];
  
  const ListMerk = Kendaraan.map((motor)=> motor.Merk) ;
  console.log(ListMerk);
  
  const ListTahun = Kendaraan.map((motor) => motor.Tahun)
  console.log(ListTahun);
  
  const Listharga = Kendaraan.filter((motor) => motor.Harga > 12000000);
  console.log(Listharga);