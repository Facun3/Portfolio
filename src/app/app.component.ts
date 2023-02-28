import { Component } from '@angular/core';
import { TimelineEvent } from './interfaces/event.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Portfolio';

  public experiencia: TimelineEvent[] = [
    {
      lapse: "Noviembre 2021 - Agosto 2022",
      title: "Fabricarg",
      contents: [
        "Desarrollo/Mantenimiento de aplicaciones web (ASP.NET Framework 2.0 + ) de diversas aseguradoras formando parte de un equipo, siendo mi rol el de programador y utilizando una metodología Scrum.",
        "Desarrollo/Mantenimiento de módulos para aplicaciones de Tesorería para el Hipódromo de Chile con Angular 11.",
        "Diseño/Desarrollo de una app Web para Inscripciones a carreras para el Hipodromo de Chile. En el cual se utilice Angular + Angular Material UI y Bootstrap, un servicio rest en ASP .NET 5 con tecnologías  como Entity Framework y LINQ para operaciones CRUD y una base de datos relacional en SQL Server."
      ]
    },
    {
      lapse: "Agosto 2022 - Actualidad",
      title: "BeeReal",
      contents:[
        "Desarrollo/Mantenimiento de aplicaciones web en aplicaciones internas para obra social OSPRERA utilizando Angular y .NET en un equipo gestionado con JIRA/Slack/Scrum.",
        "Actualización de sistema ABM Materiales y Medicamentos a tecnologías y estructuras más recientes (.NET Core/NHibernate, SQL Server y Angular)."
      ]
    }
  ];

  public educacion: TimelineEvent[] = [
    {
      lapse: "Marzo 2016 - Septiembre 2018",
      title: "Ingeniería en Computación - Universidad Nacional de Córdoba",
      contents: [
        "Carrera superior dictada por la Facultad de Ciencias Exactas de la UNC. Dedicada al diseño de sistema de hardware digital como también al diseño e implementación de software, enfocándose en aplicaciones para dispositivos digitales y sus interfaces con usuarios y otros dispositivo."
      ]
    },
    {
      lapse: "Febrero 2019 - Noviembre 2020",
      title: "Curso Ingles - Facultad de Lenguas",
      contents:[
        "Curso dictado por la Facultad de Lenguas,cuatro semestres equivalente a nivel ingles intermedio con certificado."
      ]
    },
    {
      lapse: "Febrero 2019 - Noviembre 2022",
      title: "Desarrollo en Software - ITSC",
      contents:[
        "Carrera terciaria del Instituto Técnico Superior Córdoba. Capacitación para producir componentes de software, su diseño/funcionalidad, construcción y realización de verificación unitaria de los mismos, así como su depuración, optimización y mantenimiento." 
      ]
    },
    
  ];
}
