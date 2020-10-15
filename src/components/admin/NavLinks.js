import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export const NavLinks = props => {
    return (
        <div className="row mt-5">
            <Navbar className="w-100">
                <Nav className="nav nav-tabs nav-fill w-100">
                    <NavItem className="nav-item" href="/">
                        <NavLink
                            exact
                            activeClassName="active"
                            className="nav-link"
                            to="/admin"
                        >
                            주제 발급
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            exact
                            activeClassName="active"
                            className="nav-link"
                            to="/admin/missions"
                        >
                            미션 검토
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            exact
                            activeClassName="active"
                            className="nav-link"
                            to="/admin/research-assistants"
                        >
                            RA 관리
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            exact
                            activeClassName="active"
                            className="nav-link"
                            to="/admin/withdrawals"
                        >
                            정산
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            exact
                            activeClassName="active"
                            className="nav-link"
                            to="/admin/students"
                        >
                            학생 조회
                        </NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    );
};
