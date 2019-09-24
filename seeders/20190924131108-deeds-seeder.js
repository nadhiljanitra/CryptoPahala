'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Deeds', [
      {
        name: 'Bersedekah',
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nyolong sendal di mesjid',
        rating: -3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Makan harta anak yatim',
        rating: -2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bersih-bersih rumah',
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ngomongin orang',
        rating: -5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Membantu teman yang kesusahan',
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mengajari teman cara ngoding',
        rating: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Membantu ibu-ibu melahirkan',
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Makan sayur',
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Menolong orang yang kesusahan',
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
      {
        name: 'Berantem sama teman',
        rating: -2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nyuekin pacar',
        rating: -2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Berselingkuh',
        rating: -5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ngomel-ngomel',
        rating: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Makan gorengan tapi ga bayar',
        rating: -2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mengembalikan dompet orang yang ketinggalan',
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Makan duren',
        rating: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Merawat hewan yang terlantar',
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Membantu saudara yang dililit hutang',
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Menghibur teman yang sedang bersedih',
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Jualan tapi ga ngambil untung banyak',
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nyontek kode dari github temen',
        rating: -5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Korupsi',
        rating: -5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bakar hutan',
        rating: -5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Memadamkan hutan yang kebakaran',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Memadamkan hutan padahal hutannya fine-fine aja',
        rating: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Berbohong',
        rating: -4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nyuri mangga tetangga',
        rating: -3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ngerusakin mainan adik',
        rating: -3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mendamaikan orang yang sedang bertengkar',
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Makan bubur diaduk',
        rating: -5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Makan bubur ga diaduk',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Abis pipis ga cuci tangan',
        rating: -2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jadi wota',
        rating: -3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jadi otaku',
        rating: -3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Jadi kpopper',
        rating: -3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Menasehati orang yang ga minta dinasehatin',
        rating: -3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Memberi nasehat yang mengubah hidup seseorang menjadi lebih baik',
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Memotivasi teman yang hilang semangat',
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Membelikan adik mainan baru',
        rating: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Menyiksa pembantu',
        rating: -5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ngesahin RUU KPK',
        rating: -5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mencari masalah',
        rating: -2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Menyulut keributan',
        rating: -3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ibadah tapi masih bolong-bolong',
        rating: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ibadah full ga bolong-bolong',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Ngedoain orang',
        rating: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Mengadopsi anak yatim',
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Merokok di depan orang yang tidak merokok',
        rating: -3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Merokok tapi di depannya ga ada siapa-siapa',
        rating: -1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

  ])
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Deeds', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
