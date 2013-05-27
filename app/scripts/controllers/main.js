'use strict';

angular.module('MIGQUALApp')
  .controller('MainCtrl', function ($scope) {
    $scope.question_groups = [
      /* gn: Group Name, t: text*/
      {name:"Introduction"
        ,text:["This migration qualification questionnaire collects essential information that allows EnterpriseDB to assess if an application and its underlying database schema should be considered for a detailed technical migration assessment."
              ,"Please provide as much information as possible and be as specific as possible. For any questions please contact your EnterpriseDB account manager."]
        ,questions:[]
      }
    ,{name:"Application Contact Information"
      ,text:[]
      ,questions:[
      /* q: question, a: answer, c: comment, h: hidden*/
        {q: 'Application Name{s)', a:'',c:'C1', h: false}
        ,{q: 'Primary Business Contact', a:'Name, Title, Role/Responsibility'}
        ,{q: 'Primary Technical Contact', a:'Name, Title, Role/Responsibility'}
      ]
    }
    ,{name:"Rule Out Criteria"
      ,text:["If the application is a Commercial Off-The-Shelf (COTS) application then please provide the vendor, the name of the application and its version."]
      ,questions:[
        {q: 'Does this database support a Commercial Off-The-Shelf (COTS) application?'
         ,a:'Vendor, Application & Version'}
        ,{q: 'Is the COTS available on any version of the Posgres database?', a:''}
      ]
      ,post_q_text:["For COTS applications that do not support Postgres, do not complete the rest of this questionnaire, as this database is not a suitable migration target."
                   ,"For COTS applications that support Postgres, please skip to Section 9 Licensing Information (Database Server Only)."
      ]
    }
    ,{name:"Business Context Information"
      ,text:[]
      ,questions:[
        {q: 'What does the application do for what business area?'
         ,a:''}
        ,{q:'How critical is it to the business?', a:''}
        ,{q:'Is there any compelling event (e.g. maintenance renewal or lease term renewal date)?', a:''}
        ,{q:'Does the application & database have scheduled maintenance windows? If so, how many & how long?',a:''}
        ,{q:'Outside of maintenance windows, what are the uptime requirements?',a:'(99%, 99.9%, 99.99%, ...)'}
      ]
    }
  ];
  });
