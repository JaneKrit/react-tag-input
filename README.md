# How to use the component

import TagInput from "./components/TagInput/TagInput";
<TagInput {...props}/>

# Prop	            Type	                    Default	            Description
tags	            string[]	                []	                รายการแท็กเริ่มต้น
maxTags	            number	                    10	                จำกัดจำนวนแท็กสูงสุด
onChangeTags	    (tags: string[]) => void	-	                ฟังก์ชันที่เรียกเมื่อแท็กเปลี่ยนแปลง
placeholder	        string	                    "Add tags..."	    ข้อความใน input


### npm start
Starts the application in development mode at http://localhost:3000.

### npm test
Runs the test suite in interactive watch mode.

### npm run build
Builds the production-ready files in the build folder.
