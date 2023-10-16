import { Test } from '@nestjs/testing';
import * as pactum from 'pactum';
import { AppModule } from '../src/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';
import { AuthDto } from '../src/auth/dto';
import { EditUserDto } from '../src/user/dto';
import { CreateBookmarkDto } from '../src/bookmark/dto';
import { EditBookmarkDto } from '../src/bookmark/dto/edit-bookmark.dto';

describe('App e2e', () => {
    let app: INestApplication;
    let prisma: PrismaService;
    beforeAll(async () => {
        const moduleRef = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
        app = moduleRef.createNestApplication();
        app.useGlobalPipes(
            new ValidationPipe({
                whitelist: true,
            }),
        );
        await app.init();
        await app.listen(3001);

        prisma = app.get(PrismaService);
        await prisma.cleanDb();
        pactum.request.setBaseUrl('http://localhost:3001');
    });

    afterAll(() => {
        app.close();
    });

    describe('Auth', () => {
        const dto: AuthDto = {
            email: 'test12345678@gmail.com',
            password: '12345678',
        };

        describe('Signup', () => {
            it('should throw if email empty', () => {
                return pactum
                    .spec()
                    .post('/auth/signup')
                    .withBody({
                        password: dto.password,
                    })
                    .expectStatus(400);
            });
            it('should throw if password empty', () => {
                return pactum
                    .spec()
                    .post('/auth/signup')
                    .withBody({
                        password: dto.email,
                    })
                    .expectStatus(400);
            });
            it('should throw if no body provided', () => {
                return pactum.spec().post('/auth/signup').expectStatus(400);
            });
            it('should signup', () => {
                return pactum
                    .spec()
                    .post('/auth/signup')
                    .withBody(dto)
                    .expectStatus(201);
            });
        });

        describe('Signin', () => {
            it('should throw if email empty', () => {
                return pactum
                    .spec()
                    .post('/auth/signin')
                    .withBody({
                        password: dto.password,
                    })
                    .expectStatus(400);
            });
            it('should throw if password empty', () => {
                return pactum
                    .spec()
                    .post('/auth/signin')
                    .withBody({
                        password: dto.email,
                    })
                    .expectStatus(400);
            });
            it('should throw if no body provided', () => {
                return pactum.spec().post('/auth/signin').expectStatus(400);
            });
            it('should signin', () => {
                return pactum
                    .spec()
                    .post('/auth/signin')
                    .withBody(dto)
                    .expectStatus(200)
                    .stores('userAt', 'access_token');
            });
        });

        describe('User', () => {
            describe('Get me', () => {
                it('should get current user', () => {
                    return pactum
                        .spec()
                        .get('/users/me')
                        .withHeaders({
                            Authorization: 'Bearer $S{userAt}',
                        })
                        .expectStatus(200)
                        .inspect();
                });
            });

            describe('Edit user', () => {
                it('should edit user', () => {
                    const dto: EditUserDto = {
                        firstName: 'Vanhhhh',
                        email: 'test12345678@gmail.com',
                    };
                    return pactum
                        .spec()
                        .patch('/users')
                        .withHeaders({
                            Authorization: 'Bearer $S{userAt}',
                        })
                        .withBody(dto)
                        .expectStatus(200);
                });
            });
        });

        describe('Bookmark', () => {
            describe('Get empty bookmarks', () => {
                it('should get bookmarks', () => {
                    return pactum
                        .spec()
                        .get('/bookmarks')
                        .withHeaders({
                            Authorization: 'Bearer $S{userAt}',
                        })
                        .expectStatus(200)
                        .expectBody([])
                        .inspect();
                });
            });
            describe('Create bookmark', () => {
                const dto: CreateBookmarkDto = {
                    title: 'First Bookmark',
                    link: 'https://www.youtube.com/watch?v=GHTA143_b-s&t=11519s',
                }
                it('Should create bookmark', () => {
                    return pactum
                        .spec()
                        .post('/bookmarks')
                        .withHeaders({
                            Authorization: 'Bearer $S{userAt}',
                        })
                        .withBody(dto)
                        .expectStatus(201)
                        .stores('bookmarkId', 'id');
                });
                // title and link and empty
                it('should throw if no body provided', () => {
                    return pactum
                        .spec()
                        .post('/bookmarks')
                        .withHeaders({
                            Authorization: 'Bearer $S{userAt}',
                        })
                        .withBody([])
                        .expectStatus(400);
                })
            });

            describe('Get bookmarks', () => {
                const dto: CreateBookmarkDto = {
                    title: 'First Bookmark',
                    link: 'https://www.youtube.com/watch?v=GHTA143_b-s&t=11519s',
                }
                it('Should get bookmark', () => {
                    return pactum
                        .spec()
                        .get('/bookmarks')
                        .withHeaders({
                            Authorization: 'Bearer $S{userAt}',
                        })
                        .expectStatus(200)
                        .expectJsonLength(1)
                        .expectBodyContains(dto.title)
                        .expectBodyContains(dto.link)
                        .inspect();
                });
            });

            describe('Get bookmark by id', () => {
                it('Should get bookmark by id', () => {
                    return pactum
                        .spec()
                        .get('/bookmarks/{id}')
                        .withHeaders({
                            Authorization: 'Bearer $S{userAt}',
                        })
                        .withPathParams('id', '$S{bookmarkId}')
                        .expectStatus(200)
                        .expectBodyContains('$S{bookmarkId}')
                        .inspect();
                });
            });

            describe('Edit bookmark by id', () => {
                const dto: EditBookmarkDto = {
                    title: "Vanhhhhhhhhhhhhhhh",
                    description: "https://docs.nestjs.com/custom-decorators"
                }
                it('Should edit bookmark by id', () => {
                    return pactum
                        .spec()
                        .patch('/bookmarks/{id}')
                        .withHeaders({
                            Authorization: 'Bearer $S{userAt}',
                        })
                        .withBody(dto)
                        .withPathParams('id', '$S{bookmarkId}')
                        .expectStatus(200)
                        .expectBodyContains('$S{bookmarkId}')
                        .inspect();
                });
            });

            describe('Delete bookmark by id', () => {
                it('Should edit bookmark by id', () => {
                    return pactum
                        .spec()
                        .delete('/bookmarks/{id}')
                        .withHeaders({
                            Authorization: 'Bearer $S{userAt}',
                        })
                        .withPathParams('id', '$S{bookmarkId}')
                        .expectStatus(204)
                        .inspect();
                });
                it('should get empty bookmarks', () => {
                    return pactum
                        .spec()
                        .get('/bookmarks')
                        .withHeaders({
                            Authorization: 'Bearer $S{userAt}',
                        })
                        .expectStatus(200)
                        .expectJsonLength(0)
                        .inspect();
                })
            });
        });

        it.todo('should pass');
    });
});
