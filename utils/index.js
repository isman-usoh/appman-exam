const _ = require('lodash');

// WARNING: beware object mutable

/**
 * @params {Object} store
 * @params {String} name
 * @params {Object} scores
 * @params {Number} scores{key}
 */
exports.updateStudentScore = (store, { name, scores }) => {
    // code here
    Object.keys(scores).forEach(key => {
        let subject = _.find(store, { subject: key });
        if (subject) {
            let student = _.find(subject.students, { name });
            if (student) {
                student.score = scores[key];
            } else {
                subject.students.push({ name, score: scores[key]  })
            }
        } else {
            const newSubject = {
                subject: key,
                students: [{ name, score: scores[key] }]
            }
            store.push(newSubject);
        }
    });
    return store;
};

/**
 * @params {Object} store
 * @params {String} name
 * @params {String} subject
 */
exports.removeStudentScoreBySubject = (store, { name, subject }) => {
    let subjectFont = _.find(store, { subject });
    if (subjectFont) {
        _.remove(subjectFont.students, {
            name
        });
    }
    return store;
};

/**
 * @params {Object} store
 */
exports.transformData = store => {
    const newStore = {};

    store.forEach(subject => {
        subject.students.forEach(student => {
            if (!newStore[student.name]) {
                newStore[student.name] = {
                    name: student.name
                };
            }

            newStore[student.name][subject.subject] = student.score;
        })
    });

    const students = []
    Object.keys(newStore).forEach(key => {
        students.push(newStore[key]);
    })
    return students;
};
