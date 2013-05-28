'use strict';

angular.module('MIGQUALApp')
  .controller('MainCtrl', function ($scope) {

    $scope.question_groups = [
      /* gn: Group Name, t: text, post_q_text: post-question-text */
      {name:"Introduction"
        ,text:["This migration qualification questionnaire collects essential information that allows EnterpriseDB to assess if an application and its underlying database schema should be considered for a detailed technical migration assessment."
              ,"Please provide as much information as possible and be as specific as possible. For any questions please contact your EnterpriseDB account manager."]
        ,questions:[]
      }
      ,{name:"Application Contact Information"
        ,text:[]
        ,questions:[
        /* q: question, a: answer, atype: text|yesno, ph: placeholder, h: hidden */
          {q: 'Application Name{s)', a:'', h: false}
          ,{q: 'Primary Business Contact', ph:'Name, Title, Role/Responsibility'}
          ,{q: 'Primary Technical Contact', ph:'Name, Title, Role/Responsibility'}
        ]
      }
      ,{name:"Rule Out Criteria"
        ,text:["If the application is a Commercial Off-The-Shelf (COTS) application then please provide the vendor, the name of the application and its version."]
        ,questions:[
          {q: 'Does this database support a Commercial Off-The-Shelf (COTS) application?'
           ,ph:'Vendor, Application & Version'
           ,a:''}
          ,{q: 'Is the COTS available on any version of the Postgres database?', ph:'Postgres versions supported; leave blank for none.'
           ,a:''}
        ]
        ,post_q_text:["For COTS applications that do not support Postgres, do not complete the rest of this questionnaire, as this database is not a suitable migration target."
                     ,"For COTS applications that support Postgres, please skip to Section 9 Licensing Information (Database Server Only)."
        ]
      }
      ,{name:"Business Context Information"
        ,text:[]
        ,questions:[
          {q: 'What does the application do for what business area?',a:''}
          ,{q:'How critical is it to the business?', a:''}
          ,{q:'Is there any compelling event (e.g. maintenance renewal or lease term renewal date)?', a:''}
          ,{q:'Does the application & database have scheduled maintenance windows? If so, how many & how long?',a:''}
          ,{q:'Outside of maintenance windows, what are the uptime requirements?',ph:'(99%, 99.9%, 99.99%, ...)', a:''}
        ]
      }
      ,{name:"Technology Platform Information"
        ,questions:[
          {q: 'Operating system and version',a:''}
          ,{q: 'Application server and version',a:''}
          ,{q: 'Virtualization platform and version',a:''}
          ,{q: 'Hardware platform for the database',a:''}
          ,{q: 'Hardware platform for the application',a:''}
          ,{q: 'Number of application servers',a:''}
          ,{q: 'Number of database servers',a:''}
        ]
      }
      ,{name:"Application Information"
        ,questions:[
          {q: 'Is this a custom developed application?',a:''}
          ,{q: 'If this is a custom application, can the application be modified by you?',a:''}
          ,{q: 'Is it focused on OLAP, OLTP, Reporting, or Data Warehousing?',a:''}
          ,{q: 'If it is a OLAP application, which Business Intelligence platform do you use (OBIEE, BO, SAS, Cognos, …)',a:''}
          ,{q: 'How does the application connect to the database (ODBC, JDBC, OCI, OCL, .NET, Native)?',a:''}
          ,{q: 'Are you using any Oracle FORMS?',a:''}
          ,{q: 'What is the programming language for the application (Java, C/C++, C#, PHP, Ruby, …)?',a:''}
          ,{q: 'Does the application use embedded SQL?',a:''}
          ,{q: 'If this is a custom application, are the original developers still available?',a:''}
          ,{q: 'Where in the lifecycle is the application (Design, Development, In Production & Actively Maintained, Break Fix Only, Sunset)',a:''}
          ,{q: 'How many years will the application remain in service?',a:''}
        ]
      }
      ,{name:"Database Platform Information"
        ,questions:[
          {q: 'Database platform maker and version',a:''}
          ,{q: 'Database size',a:'', ph:'GB/TB/…'}
          ,{q: 'Number of transactions/sec (average)',a:''}
          ,{q: 'Number of transactions/sec (peak)',a:''}
          ,{q: '% write (insert/update/delete) transactions',a:''}
          ,{q: '# of tables',a:''}
          ,{q: '% of data that changes on a daily basis',a:''}
          ,{q: 'Number of concurrent database connections (average)',a:''}
          ,{q: 'Number of concurrent database connections (peak)',a:''}
          ,{q: 'DB size growth rate (%/month)',a:''}
          ,{q: 'Which database monitoring tools monitor this database today?',a:''}
        ]
      }
      ,{name:"Oracle Database Specific Information"
        ,text:["Does the application or the daily operation rely on any of the following Oracle features?"]
        ,questions:[
          {q: 'RAC for failover',a:''}
          ,{q: 'RAC for horizontal scalability',a:''}
          ,{q: 'Transparent Data Encryption',a:''}
          ,{q: 'Compression',a:''}
          ,{q: 'Advanced Queuing',a:''}
          ,{q: 'Oracle OLAP',a:''}
          ,{q: 'Oracle Data Mining',a:''}
          ,{q: 'Oracle Spatial',a:''}
          ,{q: 'Total Recall',a:''}
          ,{q: 'Active Data Guard',a:''}
          ,{q: 'In Memory Database Cache',a:''}
          ,{q: 'Database Vault',a:''}
          ,{q: 'Flashback for tables or for the database',a:''}
          ,{q: 'Wrapped Functions/Procedures/Packages',a:''}
          ,{q: 'XMLDB',a:''}
          ,{q: 'Oracle Wallet Manager',a:''}
        ]
      }
      ,{name:"Licensing Information (Database Server Only)"
        ,questions:[
          {q: '# of cores and sockets per core for the database',a:''}
          ,{q: 'Annual database software maintenance cost (to Oracle, IBM, Microsoft, …)',a:''}
          ,{q: 'Expected new license cost (database only) in next 24 months',a:''}
        ]
      }
    ];

  });
