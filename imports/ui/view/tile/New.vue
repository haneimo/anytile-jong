<script setup>
import { ref, onMounted } from 'vue'
import { ImagesCollection } from '/imports/api/images';
import { viewDepthKey } from 'vue-router';

const file = ref(null);
const isUploading = ref(false);
const viewImage = ref(null);

const onFileChange = (e) => {
    file.value = e.target.files[0];
};

const upload = () => {
    if (file.value) {
        const uploadInstance = ImagesCollection.insert({
            file: file.value,
            chunkSize: 'dynamic',
        }, false);

        uploadInstance.on('start', function() {
            isUploading.value = true;
        });

        uploadInstance.on('end', function(error, fileObj) {
            for(const name in fileObj)console.log(name + ":" + fileObj[name])
            isUploading.value = false;
            if (error) {
                console.error('Error during upload: ' + error);
            } else {
                console.log('File "' + fileObj.name + '" successfully uploaded');
                // You can add your post-upload processing here
            }
            viewImage.value = '../uploads/' + fileObj._id + fileObj.extensionWithDot;
        });

        // Add error event listener
        uploadInstance.on('error', function (error) {
            console.error('Error during upload: ' + error);
        });

        uploadInstance.start();
    }
};

</script>

<template>
    <!-- 新しくTileをアップロードする -->
    <div>
        <h1>Register Tile</h1>
        <UploadForm />
    </div>

    <div v-if="isUploading">
        <p>Uploading...</p>
    </div>
    <div v-else>
        <form @submit.prevent="upload" id="upload-form">
            <input type="file" @change="onFileChange" />
            <button type="submit" form="upload-form">Upload</button>
        </form>
    </div>

    <div v-if="viewImage">
        <h3>image preview</h3>
        <img :src="viewImage" class="upload-image" />
    </div>

</template>