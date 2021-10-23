insert into "doctorPatients"("doctorId", "patientId") VALUES (10, 1);
insert into "doctorPatients"("doctorId", "patientId") VALUES (9, 2);
insert into "doctorPatients"("doctorId", "patientId") VALUES (10, 3);
insert into "doctorPatients"("doctorId", "patientId") VALUES (10, 4);
insert into "doctorPatients"("doctorId", "patientId") VALUES (9, 5);
insert into "doctorPatients"("doctorId", "patientId") VALUES (9, 7);
insert into "doctorPatients"("doctorId", "patientId") VALUES (8, 6);

insert into "questionnaires"("name","doctor_id") VALUES ('Daily test', 10);
insert into "questionnaires"("name","doctor_id") VALUES ('Weekly test', 10);
insert into "questionnaires"("name","doctor_id") VALUES ('Daily test', 9);
insert into "questionnaires"("name","doctor_id") VALUES ('Weekly test', 9);
insert into "questionnaires"("name","doctor_id") VALUES ('Daily test', 8);
insert into "questionnaires"("name","doctor_id") VALUES ('Weekly test', 8);

insert into "questions"("question","options","answer_from_doctor","type", "questionnaire_id") VALUES('Have you experienced unusual or fully new symptoms?', '{$$Yes, I have$$, $$No, I have not$$}', 'No, i have not', 'Medical', 1);
insert into "questions"("question", "options", "answer_from_doctor", "type",  "questionnaire_id") VALUES('Have you experienced any of these symptoms lately?', '{$$Diarrhea$$, $$Vomiting$$, $$Trouble with swallowing$$, $$Loss of appetite$$}', '', 'Medical', 1);
insert into "questions"("question", "options", "answer_from_doctor", "type",  "questionnaire_id") VALUES('Rate on a scale from 1 to 5 how you feel yourself.', '{$$1$$,$$2$$,$$3$$,$$4$$,$$5$$}', '5', 'Psychological', 1);
insert into "questions"("question","options","answer_from_doctor","type", "questionnaire_id") VALUES('Have you faced lack of motivation or depression lately?', '{$$Lack of motivation$$,$$Depression$$,$$No, I have not$$}', 'No, I have not', 'Psychological', 2);
insert into "questions"("question","options","answer_from_doctor","type", "questionnaire_id") VALUES('Want to share something else?', '{$$Yes, I do$$, $$No, I do not$$}', 'No, I do not','Psychological', 1);

insert into "questions"("question","options","answer_from_doctor","type", "questionnaire_id") VALUES('Have you experienced unusual or fully new symptoms?', '{$$Yes, I have$$, $$No, I have not$$}', 'No, i have not', 'Medical', 2);
insert into "questions"("question", "options", "answer_from_doctor", "type",  "questionnaire_id") VALUES('Have you experienced any of these symptoms lately?', '{$$Diarrhea$$, $$Vomiting$$, $$Trouble with swallowing$$, $$Loss of appetite$$}', '', 'Medical', 2);
insert into "questions"("question", "options", "answer_from_doctor", "type",  "questionnaire_id") VALUES('Rate on a scale from 1 to 5 how you feel yourself.', '{$$1$$,$$2$$,$$3$$,$$4$$,$$5$$}', '5', 'Psychological', 2);
insert into "questions"("question","options","answer_from_doctor","type", "questionnaire_id") VALUES('Have you faced lack of motivation or depression lately?', '{$$Lack of motivation$$,$$Depression$$,$$No, I have not$$}', 'No, I have not', 'Psychological', 2);
insert into "questions"("question","options","answer_from_doctor","type", "questionnaire_id") VALUES('Want to share something else?', '{$$Yes, I do$$, $$No, I do not$$}', 'No, I do not','Psychological', 2);

insert into "questions"("question","options","answer_from_doctor","type", "questionnaire_id") VALUES('Have you experienced unusual or fully new symptoms?', '{$$Yes, I have$$, $$No, I have not$$}', 'No, i have not', 'Medical', 3);
insert into "questions"("question", "options", "answer_from_doctor", "type",  "questionnaire_id") VALUES('Have you experienced any of these symptoms lately?', '{$$Diarrhea$$, $$Vomiting$$, $$Trouble with swallowing$$, $$Loss of appetite$$}', '', 'Medical', 3);
insert into "questions"("question", "options", "answer_from_doctor", "type",  "questionnaire_id") VALUES('Rate on a scale from 1 to 5 how you feel yourself.', '{$$1$$,$$2$$,$$3$$,$$4$$,$$5$$}', '5', 'Psychological', 3);
insert into "questions"("question","options","answer_from_doctor","type", "questionnaire_id") VALUES('Have you faced lack of motivation or depression lately?', '{$$Lack of motivation$$,$$Depression$$,$$No, I have not$$}', 'No, I have not', 'Psychological', 3);
insert into "questions"("question","options","answer_from_doctor","type", "questionnaire_id") VALUES('Want to share something else?', '{$$Yes, I do$$, $$No, I do not$$}', 'No, I do not','Psychological', 3);

insert into "questions"("question","options","answer_from_doctor","type", "questionnaire_id") VALUES('Have you experienced unusual or fully new symptoms?', '{$$Yes, I have$$, $$No, I have not$$}', 'No, i have not', 'Medical', 4);
insert into "questions"("question", "options", "answer_from_doctor", "type",  "questionnaire_id") VALUES('Have you experienced any of these symptoms lately?', '{$$Diarrhea$$, $$Vomiting$$, $$Trouble with swallowing$$, $$Loss of appetite$$}', '', 'Medical', 4);
insert into "questions"("question", "options", "answer_from_doctor", "type",  "questionnaire_id") VALUES('Rate on a scale from 1 to 5 how you feel yourself.', '{$$1$$,$$2$$,$$3$$,$$4$$,$$5$$}', '5', 'Psychological', 4);
insert into "questions"("question","options","answer_from_doctor","type", "questionnaire_id") VALUES('Have you faced lack of motivation or depression lately?', '{$$Lack of motivation$$,$$Depression$$,$$No, I have not$$}', 'No, I have not', 'Psychological', 4);
insert into "questions"("question","options","answer_from_doctor","type", "questionnaire_id") VALUES('Want to share something else?', '{$$Yes, I do$$, $$No, I do not$$}', 'No, I do not','Psychological', 4);

insert into "questions"("question","options","answer_from_doctor","type", "questionnaire_id") VALUES('Have you experienced unusual or fully new symptoms?', '{$$Yes, I have$$, $$No, I have not$$}', 'No, i have not', 'Medical', 5);
insert into "questions"("question", "options", "answer_from_doctor", "type",  "questionnaire_id") VALUES('Have you experienced any of these symptoms lately?', '{$$Diarrhea$$, $$Vomiting$$, $$Trouble with swallowing$$, $$Loss of appetite$$}', '', 'Medical', 5);
insert into "questions"("question", "options", "answer_from_doctor", "type",  "questionnaire_id") VALUES('Rate on a scale from 1 to 5 how you feel yourself.', '{$$1$$,$$2$$,$$3$$,$$4$$,$$5$$}', '5', 'Psychological', 5);
insert into "questions"("question","options","answer_from_doctor","type", "questionnaire_id") VALUES('Have you faced lack of motivation or depression lately?', '{$$Lack of motivation$$,$$Depression$$,$$No, I have not$$}', 'No, I have not', 'Psychological', 5);
insert into "questions"("question","options","answer_from_doctor","type", "questionnaire_id") VALUES('Want to share something else?', '{$$Yes, I do$$, $$No, I do not$$}', 'No, I do not','Psychological', 5);

insert into "questions"("question","options","answer_from_doctor","type", "questionnaire_id") VALUES('Have you experienced unusual or fully new symptoms?', '{$$Yes, I have$$, $$No, I have not$$}', 'No, i have not', 'Medical', 6);
insert into "questions"("question", "options", "answer_from_doctor", "type",  "questionnaire_id") VALUES('Have you experienced any of these symptoms lately?', '{$$Diarrhea$$, $$Vomiting$$, $$Trouble with swallowing$$, $$Loss of appetite$$}', '', 'Medical', 6);
insert into "questions"("question", "options", "answer_from_doctor", "type",  "questionnaire_id") VALUES('Rate on a scale from 1 to 5 how you feel yourself.', '{$$1$$,$$2$$,$$3$$,$$4$$,$$5$$}', '5', 'Psychological', 6);
insert into "questions"("question","options","answer_from_doctor","type", "questionnaire_id") VALUES('Have you faced lack of motivation or depression lately?', '{$$Lack of motivation$$,$$Depression$$,$$No, I have not$$}', 'No, I have not', 'Psychological', 6);
insert into "questions"("question","options","answer_from_doctor","type", "questionnaire_id") VALUES('Want to share something else?', '{$$Yes, I do$$, $$No, I do not$$}', 'No, I do not','Psychological', 6);

insert into "assignments"("patient_id","questionnaire_id","due_date") values (1,1,'2016-03-26 15:10:10+00:00');

insert into "diseases"("name") VALUES ('Lung cancer');
insert into "diseases"("name") VALUES ('Bone cancer');
insert into "diseases"("name") VALUES ('Brain cancer');

insert into "sideEffects"("name") VALUES ('Diarrhea');
insert into "sideEffects"("name") VALUES ('Vomitting');
insert into "sideEffects"("name") VALUES ('Trouble with swallowing');
insert into "sideEffects"("name") VALUES ('Loss of appetite');

insert into "side_effects_diseases_diseases"("side_effects_id", "diseases_id") VALUES (1,1);
insert into "side_effects_diseases_diseases"("side_effects_id", "diseases_id") VALUES (2,1);
insert into "side_effects_diseases_diseases"("side_effects_id", "diseases_id") VALUES (3,2);
insert into "side_effects_diseases_diseases"("side_effects_id", "diseases_id") VALUES (4,2);
insert into "side_effects_diseases_diseases"("side_effects_id", "diseases_id") VALUES (1, 3);
insert into "side_effects_diseases_diseases"("side_effects_id", "diseases_id") VALUES (2, 3);
insert into "side_effects_diseases_diseases"("side_effects_id", "diseases_id") VALUES (3, 3);

insert into "articles"("title", "content") VALUES ('Read about Lung cancer symptom','Lorem Ipsum');
insert into "articles"("title", "content") VALUES ('Read about Bone cancer symptom', 'Lorem Ipsum');
insert into "articles"("title", "content") VALUES ('Read about Brain cancer symptom', 'Lorem Ipsum');
insert into "articles"("title", "content") VALUES ('Read about Diarrhea symptom', 'Lorem Ipsum');

insert into "articles_diseases_diseases"("articles_id","diseases_id") VALUES (1,1);
insert into "articles_diseases_diseases"("articles_id","diseases_id") VALUES (2,2);
insert into "articles_diseases_diseases"("articles_id","diseases_id") VALUES (3,3);

insert into "articles_side_effects_side_effects"("articles_id","side_effects_id") VALUES (1,1);
insert into "articles_side_effects_side_effects"("articles_id","side_effects_id") VALUES (1,2);
insert into "articles_side_effects_side_effects"("articles_id","side_effects_id") VALUES (2,3);
insert into "articles_side_effects_side_effects"("articles_id","side_effects_id") VALUES (2,4);
insert into "articles_side_effects_side_effects"("articles_id","side_effects_id") VALUES (3,1);
insert into "articles_side_effects_side_effects"("articles_id","side_effects_id") VALUES (3,2);
insert into "articles_side_effects_side_effects"("articles_id","side_effects_id") VALUES (3,3);
insert into "articles_side_effects_side_effects"("articles_id","side_effects_id") VALUES (4,1);