import { HERO, HERO2 } from "../assets"

const BENEFITS = [
    {
        title: 'Benefits',
        features: [
            'Improved Technical Skills', 'Personalized Roadmap to Success', 'Enhanced Practical Knowledge', 'Industry Connections', 'Unmatched Support and Guidance'
        ]
    },
    {
        title: 'Features',
        features: [
            'High employment rate', 'Production-grade Projects', 'Hands-on Technical Workshops', 'Practical Curriculum', 'Industry-Relevant Knowledge'
        ]
    }
]

const TRAINING = [
    {
        name: 'Training Course Outline',
        image: HERO,
        title: 'WINDOWS SERVER ADMINISTRATION - MONTH 1',
        features: [
            'Introduction to Windows Server',
            'Installation of Type 2 Hypervisor and Microsoft Server Operating System',
            'Windows 10 Installation and IP Addressing ',
            'Promoting Server to Domain Controller and Joining Clients to a Domain Network ',
            'Administering Users account and DHCP',
            'Secondary Domain Controller for Redundancy ',
            'DHCP Failover and DNS Server Redundancy ',
            'Web Server Configuration IIS',
            'End of Windows Server Administration',
        ]
    },
    {
        name: 'Linux Server Administration Month 2',
        image: HERO2,
        title: 'Linux Server Administration Month 2',
        features: [
            'Installation of Linux Operating System',
            'Basic Linux Commands',
            'Linux Networking',
            'Linux System Administration',
            'Granting Permissions',
            'NTP Server Configuration',
            'FTP Server Configuration',
            'Web Server Configuration & Shell Bash Scripting'
        ]
    },
    {
        name: 'Cloud Operations & Administration Month 3',
        image: HERO2,
        title: 'AWS CLOUD SERVICES - MoNTH 3',
        features: [
            'Introduction to cloud computing {IAM, Global, Autoscaling, Load balancing}',
            'Route 53 DNS {Domain Name Service}',
            'S3 Bucket Storage  {CloudFront, Certificate Manager, Static Website Project}',
            'Relational Database Service',
            'IP Address Classification ',
            'VPC {Custom VPC} ',
            'LAMP Stack Project {Linux, Apache, MYSQL, PHP} - Serverless Project {Lambda function, API Gateway, and DynamoDB}'
        ]
    },
    {
        name: 'DevOps Practices & Tools Month 4',
        image: HERO,
        title: 'DEVOPS TOOLS - MONTH 4',
        features: [
            'Introduction to DevOps { Benefits of DevOps, SCM, SDLC, Git, GitHub, IDE }',
            'Infrastructure as a Code(aaC) Terraform',
            'CICD pipeline to deploy Java based application on Tomcat Monolithic Application { Jenkinsfile pipeline }', 'Containerization, Jenkinsfile { Microservices, Introduction to Docker, Dockerfile CICD Deployment }',
            'Ansible Configuration Management',
            'Static Code Analysis Sonarqube & Nexus Repository Management',
            'Introduction to Kubernetes { Pods, ConfigMap, secrets, service, deployments, Clusters }',
            'CICD Pipeline project Deployment on Kubernetes Cluster',
            'Monitoring { Datadog }',
        ]
    },
]

const TESTIMONIAL = [
    {
        name: 'Grace Ossai',
        company: 'Infosys Inc.',
        message: "I always say that when progress seems slow, it's actually building towards something big. I am thrilled to share that I received an offer this week and am now in the process of onboarding and background check. "
    },
    {
        name: 'Peter Lasode',
        company: 'Mastercard Co.',
        message: "Happy to share that I’m on the cusp of getting multiple offers …one already and another almost done. Thanks to this amazing training and to the trainers Austin and CY May we all win🥇 🏆. "
    },
    {
        name: 'Tony Okorowa',
        company: 'Infosys LLC',
        message: "Hello Guys I just got an offer from Consulting firm as Technology/DevOps lead. I want to use this medium to show a lot of appreciation to my instructors. They made a big impact in my IT journey and I am grateful. I started the training with no prior IT background like some of us and here we are today, I am grateful once again."
    },
]
export {
    BENEFITS, TRAINING, TESTIMONIAL
}