import { Body, Controller, Post, Res, Get, Req, Param, Delete } from '@nestjs/common';
import { AgencyService } from './agency.service';

@Controller('agency')
export class AgencyController {
    constructor(private readonly AgencyService: AgencyService) { }

    @Get("/passwordHasing")
    passwordHasing(@Body() data) {
        return this.AgencyService.passwordHasing(data);
    }
    @Post("/signUp")
    signUp(@Body() data) {
        return this.AgencyService.signUp(data);
    }

    @Post("/login")
    login(@Body() data, @Res() res) {
        return this.AgencyService.login(data, res);
    }

    @Post("/editAgencyProfile")
    editAgencyProfile(@Body() data, @Req() req, @Res() res) {
        return this.AgencyService.editAgencyProfile(data, req, res);
    }

    @Post("/logout")
    logout(@Req() req, @Res() res) {
        return this.AgencyService.logout(req, res);
    }

    @Post("/CreatePackage")
    CreatePackage(@Body() data, @Req() req, @Res() res) {
        return this.AgencyService.CreatePackage(data, req, res);
    }

    @Post("/EditPackage/:id")
    EditPackage(@Body() data, @Param('id') id, @Req() req, @Res() res) {
        return this.AgencyService.EditPackage(data, id, req, res);
    }

    @Delete("/DeletePackage/:id")
    DeletePackage(@Param('id') id, @Req() req, @Res() res) {
        return this.AgencyService.DeletePackage(id, req, res);
    }

    @Post("/UploadBlog")
    UploadBlog(@Body() data, @Req() req, @Res() res) {
        return this.AgencyService.UploadBlog(data, req, res);
    }

    @Post("/EditBlog/:id")
    EditBlog(@Body() data, @Param('id') id, @Req() req, @Res() res) {
        return this.AgencyService.EditBlog(data, id, req, res);
    }

    @Delete("/DeleteBlog/:id")
    DeleteBlog(@Param('id') id, @Req() req, @Res() res) {
        return this.AgencyService.DeleteBlog(id, req, res);
    }

    @Get("/ShowBlog")
    ShowBlog(@Req() req, @Res() res) {
        return this.AgencyService.showBlog(req, res);
    }



}
