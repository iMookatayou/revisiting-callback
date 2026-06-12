/* 
1. Callback & Higher-Order Function มีข้อดีอย่างไร
Answer: เขียนน้อยลงยืดหยุ่นมากขึั้น ง่ายต่อการดูแลรักษาหรือ Refactor 


2. จากการลองใช้ Callback Function ในระบบเกมและระบบแจ้งเตือน คุณคิดว่าโค้ดอ่านง่ายขึ้นหรือไม่ เพราะอะไร 
Answer: ง่ายขึ้น เพราะทำให้โค้ดสะอาดมากขึ้นมีการแยก function ย่อยและ Callback ชัดเจน


3. หากต้องสอนเพื่อนให้เข้าใจ Callback & Higher-Order Function ใน 5 นาที จะอธิบายอย่างไร 
Answer: Higher Order Function เป็น function ที่ครอบ function อีกหนึ่งครั้ง ส่วน function ที่ Higher Order Function เรียกมาใช้คือ Callback เข้ามาเป็น Argument
        เราสามารถลดความซ้ำซ้อนในการ Declare function ได้ด้วยการใช้ Higher Order Function มาทำเป็นส่วนกลาง เพื่อรับ Callback ต่างๆเข้ามา Execute แทน
        ยกตัวอย่างเช่น ex2-1 ระบบแจ้งเตือน เราจะต้องเขียน function แยกสำหรับแต้ action เราสร้าง sendNotification เป็น Higher Order function ตัวเดียว
        แล้วส่ง postLiked, postShared และอื่นๆเข้าไปเป็น Callback แทน
*/
