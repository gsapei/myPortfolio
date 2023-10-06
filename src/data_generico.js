export const data = [
        {
            templateLanguage: 'spanish',
            userPhoto: "photo.jpg",
            userName: "Gonzalo Sapei",
            userPosition: "Tecnico sup. informatico",
            userContact: [
                { text: "Barcelona, España", icon: 'fa-regular fa-map' },
                { text: "+34 634174632", icon: 'fa-regular fa-id-badge' },
                { text: "gsapei@gmail.com", icon: 'fa-regular fa-envelope' },
            ],
            userSocial: [
                { name: 'Instagram', link: "instagram.com/gsapei", icon: 'fa-brands fa-square-instagram' },
                { name: 'LinkedIn', link: "linkedin.com/in/gonzalo-sapei-810065235/", icon: 'fa-brands fa-linkedin' },
                { name: 'GitHub', link: "github.com/gsapei", icon: 'fa-brands fa-github' },
                { name: 'Flickr', link: "flickr.com/gsapei", icon: 'fa-brands fa-flickr' },
            ],
            userEducation: [
                {
                    title:"Técnico Superior en Informática Aplicada",
                    institute: "Instituto Normal Superior y Superior de Comercio Nro. 46",
                    year: "2010 - 2014"
                }
            ],
            userDescription: `
                Graduado de carrera informática, me dedico principalmente al desarrollo de software,
                realizando diversos proyectos en diferentes ámbitos y con diferentes tecnologias, demostrando mi versatilidad y adaptabilidad a nuevas tecnologias.  
                <br/>
                Además de desarrollador trabaje mucho tiempo en atención al cliente y administración, de manera presencial 
                y como operador telefónico.
            `,
            userExperience: [
                {
                    name: "EMPRESA PROVINCIAL DE LA ENERGÍA", 
                    year: "2016 - 2023",
                    description: `
                    
                    <ul class='pl-8'>   
                        <li> <b>Desarrollador de software</b> (ene. 2020 - actualidad)<br/>
                        Full Stack developer en sector GIS (Sistema de Informacion Georeferencial) de la empresa.<br/>
                        <u>Aptitudes</u>: Desarrollo Full Stack · Docker · Vue.js · Node.js · Hojas de estilos en cascada (CSS) · SQL · Git · Python · HTML · Unix · Estructuras de datos.
                        </li>

                        <li> <b>Auxiliar administrativo</b> (ene. 2017 - ene. 2020)<br/>
                        Ayudante administrativo en las oficinas de RRHH del sector Operaciones y Control de Redes de la empresa.<br/>
                        <u>Aptitudes</u>: SAP Recursos humanos · Organizacion de personal · Expedientes del personal · Administración.
                        </li>

                        <li> <b>Agente de atención telefónica</b> (jun. 2016 - ene. 2017)<br/>

                        Atencion telefónica en el centro de atencion telefonica de la empresa. Tomando reclamos tecnicos y brindando informacion a los clientes.<br/>
                        <u>Aptitudes</u>: Atención telefónica · Gestión de reclamaciones.
                        </li>

                    </ul>
                    `
                },        
                {
                    name: "DESARROLLADOR FREELANCE", 
                    year: "2012 - 2016",
                    description: `
                    <ul class='pl-8'> 
                        <li> Desarrollo de sistemas administrativos y de control de stock mayormente en <b>Vb.Net</b> y <b>Ms.Access</b>. </li>
                        <li> Diseño y programación de sitios web de forma autónoma. Mayormente utilizando <b>HTML</b>, <b>CSS</b>, <b>PHP</b> y <b>MySQL</b> </li>
                    </ul>
                                `
                },
                
                {
                    name: "SIC S.A.", 
                    year: "2011 - 2012",
                    description: `
                    <ul class='pl-8'> 
                        <li> Montaje y tendido de <b>redes de datos</b> para el programa “Conectar Igualdad” en instituciones educativas de toda la provincia de Santa Fe (Argentina).</li>
                        <li> <b>Organizacion de grupos de trabajo</b>, diseño y configuracion de redes. </li>
                    </ul>
                    `
                },
                {
                    name: "CITAR S.R.L.",
                    year: "2008 - 2011",
                    description: `
                    <ul class='pl-8'>
                        <li> <b>Atención al cliente</b> en empresa de Verificacion Tecnica Vehicular (VTV). </li>
                        <li> <b>Auxiliar administrativo</b> y tareas de contabilidad diaria. </li>
                    </ul>
                    `
                },
            ],
            userLanguages: [
            { name: 'español: nativo', percent: 100 }, 
            { name: 'ingles: medio', percent: 65 }
            ],
            userSkills: [
                {
                category: 'Generales',
                skills: [
                    { name: 'Atencion al cliente', percent: 70 },
                    { name: 'Trabajo en equipo', percent: 70 },
                    { name: 'Capacidad de analisis', percent: 90 },
                    { name: 'Gestion de proyectos', percent: 80 },
                    { name: 'Organizacion', percent: 90 },
                    ]
                },
                {
                category: 'Frontend',
                skills: [
                    { name: 'html', percent: 90 },
                    { name: 'css/sass', percent: 90 },
                    { name: 'Javascript', percent: 90 },
                    { name: 'react', percent: 80 },
                    { name: 'vue.js', percent: 80 },
                    { name: 'quasar', percent: 80 },
                    { name: 'vuetify', percent: 70 },
                    { name: 'bootstrap', percent: 50 },  
                    ]
                },
                {
                category: 'Backend',
                skills: [
                    { name: 'Typescript', percent: 40 },
                    { name: 'node.js', percent: 80 },  
                    { name: 'python', percent: 70 },  
                    { name: 'ruby', percent: 70 },  
                    { name: 'php', percent: 40 },  
                    { name: 'bash', percent: 40 },  
                    { name: 'c++', percent: 30 },  
                    ]  
                },  
                {
                category: 'Base de datos',
                skills: [
                    { name: 'MySQL', percent: 60 },  
                    { name: 'OracleSQL', percent: 60 },  
                    { name: 'PostgreSQL', percent: 60 },  
                    { name: 'MongoDB', percent: 40 },  
                    ]
                },
                {
                category: 'Otras',
                skills: [
                    { name: 'Windows', percent: 95}, 
                    { name: 'Linux', percent: 80}, 
                    { name: 'Office', percent: 90}, 
                    { name: 'Docker', percent: 60 },  
                    { name: 'GIT', percent: 60 }, 
                    ]
                }
            ],
            userProjects: [
                {
                    name: 'ServerMonitor',
                    description: `
                        <h4 class="text-primary"> ServerMonitor es un sistema de monitorizacion, consola de control y visor de sucesos de los servidores linux que intervienen en el sistema GIS de una empresa.</h4><br/>
                        Cuenta de 3 componentes para funcionar:
                            <li> <strong>Back-End</strong>: Servicio en Node.js que procesa la informacion enviada por los scripts y persiste los datos en una base de datos PostgreSQL. </li>
                            <li> <strong>Front-End</strong>: cliente o interfaz grafica para navegadores web (Vue.js, Quasar, Vuex). </li>
                            <li> <strong>Scripts del lado servidor</strong>: Sensores que toman datos y los envian al backend. Desarrollados en Python3. </li>
                        </ul>
                        <br/>
                        <h4>Logica de funcionamiento</h4>
                        <br/>
                        <p>El servicio <strong>ServerMonitor </strong> se encarga de recibir la información de estado de los servidores, proveniente de los <strong>Serverside-Scripts</strong> 
                        y de verificar periódicamente que cada script este funcionando. Procesa esta información y la presenta en una API para ser accedida por los clientes. A su vez persiste 
                        los datos en una base de datos PostgreSQL por seguridad en caso de cerrarse el proceso, corte de luz, etc.<br>
                        Al recibir información puntual de algún cambio de estado en un servidor envía un mensaje de difusion en tiempo real a todos los clientes (front-end) mediante Socket.IO para que mantengan siempre actualizada la información.</p>
        
                        `,
                    technologies: [
                        'Python', 
                        'Shell scripting',
                        'Node.JS',
                        'Express',
                        'Sockets.IO',
                        'PostgreSQL',
                        'Vue.JS',
                        'Quasar',
                        'HTML',
                        'SCSS'
                    ],
                    images: [
                        'sm0.jpg',
                        'sm1.jpg',
                        'sm2.png',
                        'sm3.jpg',
                        'sm4.jpg',
                        'sm5.jpg',
                        'sm6.jpg',
                        'sm7.jpg'
                    ],
                    link: 'https://github.com/gsapei/ServerMonitor'
                },
                {
                    name: 'FotoPortfolio',
                    description: `
                        <h4 class="text-primary">Portfolio fotografico autoadministrable desarrollado en Django. </h4>
                        `,
                    technologies: [
                        'Python', 
                        'Django',
                        'HTML',
                        'SCSS'
                    ],
                    images: [
                        'fp0.jpg',
                        'fp1.jpg',
                        'fp2.jpg',
                    ],
                    link: 'https://github.com/gsapei/fotoPortfolio'
                },
                {
                    name: 'MyCV template',
                    description: `
                        <h4 class="text-primary">Template VueJs/Vuetify personalizable de curriculum vitae en formato web.  </h4>
                        <br/><br/>
                        <h4>Configuracion:</h4>
                        <p> Dentro del archivo <strong> userData.vue </strong> se encuentran los datos del usuario. Es necesario compilar la aplicacion
                        luego de hacer modificaciones.<br/>
                        Las imagenes de los proyectos y la foto de perfil se colocan dentro de la carpeta <strong>/assets/images/</strong>
                        </p>
                        `,
                    technologies: [
                        'Vue.js', 
                        'Vuetify',
                        'HTML',
                        'SCSS'
                    ],
                    images: [
                        'mycv0.jpg',
                        'mycv1.jpg',
                    ],
                    link: 'https://github.com/gsapei/mycv'
                },
                {
                    name: 'GStock Joyeria',
                    description: `
                        <h4 class="text-primary">Sistema de control de stock y venta mediante paños para joyería, desarrollado en vb.net y Access SQL.</h4>
                        <br/><br/>
                        <h4>Caracteristicas y lógica del programa:</h4>
                        <p> 
                        El sistema consta de un Stock General y diferentes Paños, que se asignaran a diferentes vendedores.<br>
                        Cada paño se ira llenando con articulos del Stock General mediante el lector de codigo de barras y se lo llevara el vendedor. 
                        A su retorno se escanearan los articulos del paño y volveran al Stock General. Se calcula el monto de los articulos que no volvieron 
                        y se genera una venta con ese monto, que deberá pagar el vendedor.<br>
                        Cada vendedor ira generando premios al llegar a cierto monto de venta, con el cual podra retirar articulos del monto generado.          
                        <br><br>
                        A demás, el sistema cuenta con un historial de cada movimiento y venta, estadisticas graficas (generales y de cada vendedor), reportes y un sistema de Backup.
                        El sistema esta diseñado para poder usarlo en red con varios clientes apuntando a la misma base de datos.
        
                        </p>
                        `,
                    technologies: [
                        'vb.net', 
                        'Access',
                        'SQL',
                        'BarCode Scanner',
                        'Zebra labels',
                        'Webcam capture'
                    ],
                    images: [
                        'gsj0.jpg',
                        'gsj1.jpg',
                        'gsj2.jpg',
                        'gsj3.jpg',
                        'gsj4.jpg',
                        'gsj5.jpg',
                        'gsj6.jpg',
                        'gsj7.jpg',
                    ],
                    link: 'https://github.com/gsapei/GStockJoyeria'
                },
            
            ]
        },
        {
        templateLanguage: 'english',
        userPhoto: "photo.jpg",
        userName: "Gonzalo Sapei",
        userPosition: "FullStack developer",
        userContact: [
            { text: "Barcelona, Spain", icon: 'fa-regular fa-map' },
            { text: "+34 634174632", icon: 'fa-regular fa-id-badge' },
            { text: "gsapei@gmail.com", icon: 'fa-regular fa-envelope' },
            { text: "http://sapeigonzalo.es", icon: 'fa-regular fa-folder-closed' },
        ],
        userSocial: [
            { name: 'Instagram', link: "instagram.com/gsapei", icon: 'fa-brands fa-square-instagram' },
            { name: 'LinkedIn', link: "linkedin.com/in/gonzalo-sapei-810065235/", icon: 'fa-brands fa-linkedin' },
            { name: 'GitHub', link: "github.com/gsapei", icon: 'fa-brands fa-github' },
            { name: 'Flickr', link: "flickr.com/gsapei", icon: 'fa-brands fa-flickr' },
        ],
        userEducation: [
            {
                title:"Higher Technician in Applied Informatics",
                institute: "Instituto Normal Superior y Superior de Comercio Nro. 46",
                year: "2010 - 2014"
            }
        ],
        userDescription: `
            I dedicate myself to software development with intelligence and creativity, using my self-taught knowledge and constant curiosity. Since childhood, I have had a great passion for computer science and art, which I have cultivated independently. I have a great ability to research and learn any topic that interests me, and I strive for quality and excellence in my work. I have carried out various software projects in different fields and with different technologies, demonstrating my versatility and adaptability. In addition to being a developer, I have other artistic facets, such as being a musician, composer, photographer, designer, and sports enthusiast.
            `,
        userExperience: [
            {
                name: "EMPRESA PROVINCIAL DE LA ENERGÍA", 
                year: "2016 - 2023",
                description: `
                <ul class='pl-8'>
                    <li> Development of scripts in <b>Python</b> and <b>Ruby</b> for controlling and searching for inconsistent elements in the GIS system. </li>
                    <li> Development and design of <b>on-demand BIRT reports</b> based on Oracle database queries. </li>
                    <li> Configuration and maintenance of <b>HAProxy</b> load balancer. </li>
                    <li> Development of <b>PL/SQL</b> queries, functions, and schedules in Oracle. </li>
                    <li> Deployment and configuration of own and third-party applications using <b>Docker</b>. </li>
                    <li> Collaboration in development and <b>GIT repositories</b> of the development team. </li>
                    <li> Full-Stack development of a control and monitoring application for the GIS system. Using <b>Node.js, Express.js, JWT, Vue.js, Quasar, PostgreSQL, Docker</b> as the stack. </li>       
                    <li> Development of <b>Bash scripts</b> and configuration of <b>crontabs</b> on Linux servers in the GIS system. </li>
                </ul>            
                `
            },        
            {
                name: "FREELANCE DEVELOPER", 
                year: "2012 - 2016",
                description: `
                <ul class='pl-8'>
                    <li> Development of administrative systems and stock control mostly in <b>Vb.Net</b> and <b>Ms.Access</b>. </li>
                    <li> Design and programming of websites autonomously. Mostly using <b>HTML, CSS, PHP</b>, and <b>MySQL</b>. </li>
                </ul>
                `
            },
            {
                name: "SIC S.A.", 
                year: "2011 - 2012",
                description: `
                <ul class='pl-8'>
                    <li> Assembly and installation of networks for the "Conectar Igualdad" program in educational institutions throughout the province of Santa Fe (Argentina). </li>
                    <li> Organization of work groups, design, and configuration of networks. </li>
                </ul>
                `
            },
            {
                name: "AIRNET S.R.L.",
                year: "2009 - 2011",
                description: `
                <ul class='pl-8'>
                    <li> Collaboration in the installation and configuration of corporate networks for an internship. </li>
                </ul>
                `
            },
        ],
        userLanguages: [
        { name: 'Spanish', percent: 100 }, 
        { name: 'English', percent: 65 }
        ],
        userSkills: [
            {
            category: 'Frontend',
            skills: [
                { name: 'HTML', percent: 90 },
                { name: 'CSS/Sass', percent: 90 },
                { name: 'Vue.js', percent: 80 },
                { name: 'Quasar', percent: 80 },
                { name: 'Vuetify', percent: 70 },
                { name: 'Bootstrap', percent: 50 },  
                ]
            },
            {
            category: 'Backend',
            skills: [
                { name: 'Node.js', percent: 80 },  
                { name: 'Python', percent: 70 },  
                { name: 'Ruby', percent: 70 },  
                { name: 'PHP', percent: 40 },  
                { name: 'Bash', percent: 40 },  
                { name: 'C++', percent: 30 },  
                ]  
            },  
            {
            category: 'Database',
            skills: [
                { name: 'MySQL', percent: 60 },  
                { name: 'OracleSQL', percent: 60 },  
                { name: 'PostgreSQL', percent: 60 },  
                { name: 'MongoDB', percent: 40 },  
                ]
            },
            {
            category: 'Others',
            skills: [
                { name: 'Javascript', percent: 90 },
                { name: 'Typescript', percent: 90 },
                { name: 'Linux', percent: 80}, 
                { name: 'Docker', percent: 60 },  
                { name: 'GIT', percent: 60 }, 
                ]
            }
        ],
        userProjects: [
            {
            name: 'ServerMonitor',
            description: `
                <h4 class="text-primary">ServerMonitor is a monitoring system, control console, and event viewer for Linux servers involved in a company's GIS system.</h4><br/>
                <p>It consists of 3 components to function:</p>
                <ul>
                    <li><strong>Back-End:</strong> Service in Node.js that processes the information sent by the scripts and persists the data in a PostgreSQL database.</li>
                    <li><strong>Front-End:</strong> Client or graphical interface for web browsers (Vue.js, Quasar, Vuex).</li>
                    <li><strong>Server-side Scripts:</strong> Sensors that collect data and send it to the backend. Developed in Python3.</li>
                </ul>
                <br/>
                <h4>Functioning Logic</h4>
                <br/>
                <p>The <strong>ServerMonitor</strong> service is responsible for receiving server status information from the server-side scripts and periodically verifying that each script is functioning. It processes this information and presents it in an API to be accessed by clients. It also persists the data in a PostgreSQL database for security purposes in case of process closure, power outage, etc.<br>
                When receiving specific information about a server's state change, it sends a real-time broadcast message to all clients (front-end) using Socket.IO to keep the information always up to date.</p>
                `,
            technologies: [
                'Python', 
                'Shell scripting',
                'Node.JS',
                'Express',
                'Sockets.IO',
                'PostgreSQL',
                'Vue.JS',
                'Quasar',
                'HTML',
                'SCSS'
            ],
            images: [
                'sm0.jpg',
                'sm1.jpg',
                'sm2.png',
                'sm3.jpg',
                'sm4.jpg',
                'sm5.jpg',
                'sm6.jpg',
                'sm7.jpg'
            ],
            link: 'https://github.com/gsapei/ServerMonitor'
            },
            {
            name: 'FotoPortfolio',
            description: `
                <h4 class="text-primary">Self-administrable photographic portfolio developed in Django.</h4>
                `,
            technologies: [
                'Python', 
                'Django',
                'HTML',
                'SCSS'
            ],
            images: [
                'fp0.jpg',
                'fp1.jpg',
                'fp2.jpg',
            ],
            link: 'https://github.com/gsapei/fotoPortfolio'
            },
            {
            name: 'MyCV template',
            description: `
                <h4 class="text-primary">Customizable web-based curriculum vitae template in VueJs/Vuetify.</h4>
                <br/>
                <h4>Configuration:</h4>
                <p>Inside the file <strong>userData.vue</strong>, you will find the user's data. It is necessary to compile the application
                after making modifications.<br/>
                The images of the projects and the profile picture should be placed inside the <strong>/assets/images/</strong> folder.</p>
                `,
            technologies: [
                'Vue.js', 
                'Vuetify',
                'HTML',
                'SCSS'
            ],
            images: [
                'mycv0.jpg',
                'mycv1.jpg',
            ],
            link: 'https://github.com/gsapei/mycv'
            },
            {
            name: 'GStock Joyeria',
            description: `
                <h4 class="text-primary">Stock control and sales system using trays for a jewelry store, developed in vb.net and Access SQL.</h4>
                <br/>
                <h4>Program features and logic:</h4>
                
                <p>The system consists of a General Stock and different Trays, which will be assigned to different salespeople.
                Each tray will be filled with items from the General Stock using a barcode reader and taken by the salesperson.
                Upon return, the items from the tray will be scanned and returned to the General Stock. The amount of items that did not return
                will be calculated, and a sale will be generated with that amount, which the salesperson will have to pay.
                Each salesperson will earn prizes upon reaching a certain sales amount, which they can use to withdraw items from the generated amount.</p>
                
                <p>In addition, the system has a history of each movement and sale, graphical statistics (general and for each salesperson), reports, and a backup system.
                The system is designed to be used on a network with multiple clients pointing to the same database.</p>  
                    `,
            technologies: [
                'vb.net', 
                'Access',
                'SQL',
                'BarCode Scanner',
                'Zebra labels',
                'Webcam capture'
            ],
            images: [
                'gsj0.jpg',
                'gsj1.jpg',
                'gsj2.jpg',
                'gsj3.jpg',
                'gsj4.jpg',
                'gsj5.jpg',
                'gsj6.jpg',
                'gsj7.jpg',
            ],
            link: 'https://github.com/gsapei/GStockJoyeria'
            },
            ]
        }
    ]