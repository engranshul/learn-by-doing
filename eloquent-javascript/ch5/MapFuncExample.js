let officers = [
    { id: 20, name: 'Captain Piett' },
    { id: 24, name: 'General Veers' },
    { id: 56, name: 'Admiral Ozzel' },
    { id: 88, name: 'Commander Jerjerrod' }
  ];

let newOfficers =[]
officers.filter(officer => officer.id >24).map(officer => newOfficers.push(officer.name));
console.log("new officers name is",newOfficers)

// similar other way by returning

let oldOfficers=[];
oldOfficers=officers.filter(officer => officer.id <=24).map(officer => {return officer.name});
console.log("new officers updated is",oldOfficers)


