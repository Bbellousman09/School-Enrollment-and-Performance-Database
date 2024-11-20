const express = require('express');  
const bodyParser = require('body-parser');  
const cors = require('cors');  
const { sequelize, Student, Attendance } = require('./models'); // Adjust path as necessary  

const app = express();  
const PORT = process.env.PORT || 3000;  

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware  
app.use(cors());  
app.use(bodyParser.json()); // To parse JSON request bodies  

// Sync the database  
sequelize.sync()  
    .then(() => console.log('Database synced'))  
    .catch((error) => console.error('Unable to sync database:', error));  

// Root route  
app.get('/', (req, res) => {  
    res.render('index'); // Render the index.ejs file
});  

// Student Routes  
app.get('/students', async (req, res) => {  
    try {  
        const students = await Student.findAll();  
        res.json(students);  
    } catch (error) {  
        console.error('Error fetching students:', error);  
        res.status(500).send('Internal Server Error');  
    }  
});  

app.post('/students', async (req, res) => {  
    try {  
        const student = await Student.create(req.body);  
        res.status(201).json(student);  
    } catch (error) {  
        res.status(400).json({ error: error.message });  
    }  
});  

app.delete('/students/:id', async (req, res) => {  
    try {  
        const student = await Student.findByPk(req.params.id);  
        if (!student) return res.status(404).json({ error: 'Student not found' });  
        await student.destroy();  
        res.status(204).send();  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.put('/students/:id', async (req, res) => {  
    try {  
        const student = await Student.findByPk(req.params.id);  
        if (!student) return res.status(404).json({ error: 'Student not found' });  
        await student.update(req.body);  
        res.status(200).json(student);  
    } catch (error) {  
        res.status(400).json({ error: error.message });  
    }  
});  

// Attendance Routes  
app.get('/attendance', async (req, res) => {  
    try {  
        const attendanceRecords = await Attendance.findAll();  
        res.json(attendanceRecords);  
    } catch (error) {  
        console.error('Error fetching attendance records:', error);  
        res.status(500).send('Internal Server Error');  
    }  
});  

app.post('/attendance', async (req, res) => {  
    try {  
        const attendance = await Attendance.create(req.body);  
        res.status(201).json(attendance);  
    } catch (error) {  
        res.status(400).json({ error: error.message });  
    }  
});  

app.delete('/attendance/:id', async (req, res) => {  
    try {  
        const attendance = await Attendance.findByPk(req.params.id);  
        if (!attendance) return res.status(404).json({ error: 'Attendance record not found' });  
        await attendance.destroy();  
        res.status(204).send();  
    } catch (error) {  
        res.status(500).json({ error: error.message });  
    }  
});  

app.put('/attendance/:id', async (req, res) => {  
    try {  
        const attendance = await Attendance.findByPk(req.params.id);  
        if (!attendance) return res.status(404).json({ error: 'Attendance record not found' });  
        await attendance.update(req.body);  
        res.status(200).json(attendance);  
    } catch (error) {  
        res.status(400).json({ error: error.message });  
    }  
});  

// Start the server  
app.listen(PORT, () => {  
    console.log(`Server running on port ${PORT}`);  
});
