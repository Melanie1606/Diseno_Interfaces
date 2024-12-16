import { Component } from '@angular/core';

@Component({
  selector: 'app-Deber5',
  templateUrl: './Deber5.component.html',
  styleUrls: ['./Deber5.component.scss']
})
export class Deber5Component {
  // Lista de productos
  products = [
    {
      id: 1,
      name: 'Laptop Gamer',
      price: 1200,
      image: 'https://novedadeskaren.ec/wp-content/uploads/2023/08/71nz3cIcFOL._AC_SL1500_.jpg',
      inventoryStatus: 'En Stock'
    },
    {
      id: 2,
      name: 'Smartphone Pro',
      price: 800,
      image: 'https://www.blackview.fr/cdn/shop/files/BV9300Pro-Green_01.jpg?v=1704795593&width=1200',
      inventoryStatus: 'Pocas Unidades'
    },
    {
      id: 3,
      name: 'Audífonos Inalámbricos',
      price: 150,
      image: 'https://http2.mlstatic.com/D_NQ_NP_731978-MLU78577660806_082024-O.webp',
      inventoryStatus: 'Agotado'
    },
    {
      id: 4,
      name: 'Monitor Ultra HD',
      price: 350,
      image: 'https://www.lg.com/ec/images/monitores/md07516302/gallery/32UN500-W_UHD-4k-Monitors_Z1.jpg',
      inventoryStatus: 'En Stock'
    },
    {
      id: 5,
      name: 'Teclado Mecánico RGB',
      price: 120,
      image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2019/06/hp-omen-sequencer-teclado-mecanico-gaming-rgb.png?tf=3840x',
      inventoryStatus: 'En Stock'
    },
    {
      id: 6,
      name: 'Mouse Gamer Inalámbrico',
      price: 60,
      image: 'https://oechsle.vteximg.com.br/arquivos/ids/4553144-998-998/image-471a3444301746e7a1e760ef89001e67.jpg?v=637657864408070000',
      inventoryStatus: 'Pocas Unidades'
    },
    {
      id: 7,
      name: 'Tablet Android',
      price: 500,
      image: 'https://m.media-amazon.com/images/I/71W3Ud+kOLL._AC_SL1500_.jpg',
      inventoryStatus: 'En Stock'
    },
    {
      id: 8,
      name: 'Smartwatch Deportivo',
      price: 200,
      image: 'https://m.media-amazon.com/images/I/61heR4QfLyL._AC_SL1085_.jpg',
      inventoryStatus: 'Pocas Unidades'
    },
    {
      id: 9,
      name: 'Cámara de Acción 4K',
      price: 300,
      image: 'https://m.media-amazon.com/images/I/61gSVk5L6gL._AC_SL1001_.jpg',
      inventoryStatus: 'Agotado'
    }
  ];
  

  // Configuración del carrusel (responsiveOptions)
  responsiveOptions = [
    {
      breakpoint: '2060px',
      numVisible: 3,   // 4 productos visibles en pantallas grandes
      numScroll: 1
    },
    {
      breakpoint: '980px',
      numVisible: 2,   // 3 productos visibles en pantallas medianas
      numScroll: 1
    },
    {
      breakpoint: '660px',
      numVisible: 1,   // 2 productos visibles en pantallas pequeñas
      numScroll: 1
    },

  ];

  // Método para determinar el severidad de la disponibilidad
  getSeverity(status: string): 'success' | 'secondary' | 'info' | 'warning' | 'danger' | 'contrast' {
    switch (status) {
      case 'In Stock':
        return 'success';
      case 'Out of Stock':
        return 'danger';
      case 'Low Stock':
        return 'warning';
      default:
        return 'info';
    }
  }
}
