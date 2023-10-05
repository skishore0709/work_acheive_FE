<template>
    <div class="hello">
        <div class="container bg-dark text-light">
            <div class="row">
                <div class="col-md-12">
                    <form>
                        <div class="form-group">
                            <label>Name</label>
                            <input type="name" class="form-control" />
                            <label>Email</label>
                            <input type="email" class="form-control" />
                            <label>Password</label>
                            <input type="password" class="form-control" />
                            <button type="button" class="btn btn-success">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'LoginPage',
    props: {
        msg: String
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
    border-style: solid;
    width: 350px;
}

label {
    padding-right: 250px;
    margin-top: 20px;
    font-weight: 700;
    align-content: flex-start;
}

form {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 35px;
}

button {
    margin-top: 30px;
    border-radius: 5px;
}

.container {
    width: fit-content;
    border-block: 5px solid #2c3e50;
    border-radius: 10px;
    margin-top: 10px;
}</style>