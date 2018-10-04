/* Array.prototype.map ET filter - Exercice 2

Il s'agit d'écrire une fonction getCampusesTeachingReact, qui reçoit en argument un tableau
d'objets décrivant des campus de la Wild Code School. Chaque campus a ces propriétés:
- city: ville où se trouve le campus
- curriculums: les cursus proposés dans ce campus (PHP/Symfony, JS/React, JS/Angular, etc.)

En utilisant filter puis map, la fonction doit renvoyer les villes des campus qui proposent
un cursus JS/React.

Tableau en entrée:

Sortie attendue:
['Bordeaux', 'Lille', 'Marseille', 'Reims', 'Toulouse']

*/

function getCampusesTeachingReact(campuses) {
	return campuses.filter((campus) => {
		return campus.curriculums.includes('JS/React')
	}).map(campus => {
		return campus.city});
}

module.exports = getCampusesTeachingReact;
