import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {
        id: 0,
        image: '../../assets/women1.jpg',
        title: '李建',
        price: '信息工程师',
        rating: '4.5',
        desc: '负责本项目部工程用地和生活用地的布置等工作'
      },
      {
        id: 1,
        image: '../../assets/women1.jpg',
        title: '肖峰',
        price: '信息工程师',
        rating: '4.5',
        desc: '负责测量仪器的管理、请领、保养、报废等工作'
      },
      {
        id: 2,
        image: '../../assets/women1.jpg',
        title: '赵六',
        price: '信息工程师',
        rating: '4.5',
        desc: '负责办理施工许可证及配合办理相关建设前期手续'
      },
      {
        id: 3,
        image: '../../assets/women1.jpg',
        title: '李建',
        price: '信息工程师',
        rating: '4.5',
        desc: '负责本项目部工程用地和生活用地的布置等工作'
      },
      {
        id: 4,
        image: '../../assets/women1.jpg',
        title: '章涨',
        price: '信息工程师',
        rating: '4.5',
        desc: '协助工程部审核工程预、结算，负责收集结算资料'
      },
      {
        id: 5,
        image: '../../assets/women1.jpg',
        title: '李建',
        price: '信息工程师',
        rating: '4.5',
        desc: '负责本项目部工程用地和生活用地的布置等工作'
      }
    ];

    const heroes2 = [
      {
        id: 1,
        name: '肖峰',
        department: '设备与能源管理部',
        post: '气报表系统检测',
        Entrytime: '2009-08-21',
        Telephone: ' 4006006881',
        situation: '正式',
        numb: 3,
        Equipmentmanagement: '气报表一阶段',
        Openingtime: '2017/05/26 13:30',
        devicestatus:'维修'
      },

      {
        id: 2,
        name: 'Magma',
        department: '设备与能源管理部',
        post: '气报表系统检测',
        Entrytime: '2017-05-25',
        Telephone: ' 8008201201',
        situation: '实习',
        numb: 3,
        Equipmentmanagement: '气报表二阶段',
        Openingtime: '2017/03/24 12:30',
        devicestatus:'开启'
      },
      {
        id: 3,
        name: 'Tornado',
        department: '设备与能源管理部',
        post: '气报表系统检测',
        Entrytime: '2015-03-11',
        Telephone: ' 4008517517',
        situation: '正式',
        numb: 3,
        Equipmentmanagement: '气报表三阶段',
        Openingtime: '2017/03/24 12:30',
        devicestatus:'开启'
      },
      {
        id: 4,
        name: 'Tom',
        department: '设备与能源管理部',
        post: '气报表系统检测',
        Entrytime: '2015-06-11',
        Telephone: ' 4008517517',
        situation: '正式',
        numb: 3,
        Equipmentmanagement: '气报表三阶段',
        Openingtime: '2017/05/24 12:30',
        devicestatus:'开启'
      },
      {
        id: 5,
        name: 'RubberMan',
        department: '设备与能源管理部',
        post: '水监控系统检测',
        Entrytime: '2017-08-16',
        Telephone: ' 4008800123',
        situation: '实习',
        numb: 1,
        Equipmentmanagement: '水监控二阶段',
        Openingtime: '2017/07/26 09:10',
        devicestatus:'开启'
      },
      {
        id: 6,
        name: 'Dynama',
        department: '设备与能源管理部',
        post: '水监控系统检测',
        Entrytime: '2016-09-12',
        Telephone: '4008105858',
        situation: '正式',
        numb: 1,
        Equipmentmanagement: '水监控三阶段',
        Openingtime: '2017/10/19 20:10',
        devicestatus:'开启'
      },
      {
        id: 7,
        name: '肖峰',
        department: '设备与能源管理部',
        post: '气报表系统检测',
        Entrytime: '2009-08-21',
        Telephone: ' 4006006881',
        situation: '正式',
        numb: 3,
        Equipmentmanagement: '气报表一阶段',
        Openingtime: '2017/05/26 13:30',
        devicestatus:'维修'
      },

      {
        id: 8,
        name: 'Magma',
        department: '设备与能源管理部',
        post: '气报表系统检测',
        Entrytime: '2017-05-25',
        Telephone: ' 8008201201',
        situation: '实习',
        numb: 3,
        Equipmentmanagement: '气报表二阶段',
        Openingtime: '2017/03/24 12:30',
        devicestatus:'开启'
      },
      {
        id: 9,
        name: 'Tornado',
        department: '设备与能源管理部',
        post: '气报表系统检测',
        Entrytime: '2015-03-11',
        Telephone: ' 4008517517',
        situation: '正式',
        numb: 3,
        Equipmentmanagement: '气报表三阶段',
        Openingtime: '2017/03/24 12:30',
        devicestatus:'开启'
      },
      {
        id: 10,
        name: 'Tom',
        department: '设备与能源管理部',
        post: '气报表系统检测',
        Entrytime: '2015-06-11',
        Telephone: ' 4008517517',
        situation: '正式',
        numb: 3,
        Equipmentmanagement: '气报表三阶段',
        Openingtime: '2017/05/24 12:30',
        devicestatus:'开启'
      }
    ];
    return {heroes,heroes2};
  }
}
