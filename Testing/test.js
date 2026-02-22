const assert = require('assert'); 
 
// Mock data 
let tasks = []; 
function addTask(text) { tasks.push({id: 1, text, completed: false}); } 
function deleteTask(id) { tasks = tasks.filter(t => t.id !== id); } 
 
// Test Suite 
try { 
    console.log("Testing addTask..."); 
    addTask("Test Task"); 
    assert.strictEqual(tasks.length, 1); 
console.log("
✅
 addTask passed"); 
console.log("Testing deleteTask..."); 
deleteTask(1); 
assert.strictEqual(tasks.length, 0); 
console.log("
✅
 deleteTask passed"); 
} catch (e) { 
console.error("
❌
 Test Failed", e); 
process.exit(1); 
} 
